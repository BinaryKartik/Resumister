import { saveAs } from "file-saver";
import * as docx from 'docx'
import "../Static/word.css";
import React from "react";
import { useLocation } from "react-router-dom";
import { Document, HeadingLevel, Paragraph} from "docx";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Word = () => {
  let query = useQuery();
  function start() {
    var User = JSON.parse(query.get(`user`));
    console.log(User)
    const doc = new Document({
      creator: "Clippy",
      title: "Sample Document",
      description: "A brief example of using docx",
      styles: {
          paragraphStyles: [
              {
                  id: "Heading1",
                  name: "Heading 1",
                  basedOn: "Normal",
                  next: "Normal",
                  quickFormat: true,
                  run: {
                      size: 50,
                      bold: true,
                  },
                  paragraph: {
                      spacing: {
                          after: 120,
                      },
                  },
              },
              {
                  id: "Heading2",
                  name: "Heading 2",
                  basedOn: "Normal",
                  next: "Normal",
                  quickFormat: true,
                  run: {
                      size: 35,
                      bold: true,
                      underline: {},
                  },
                  paragraph: {
                      spacing: {
                          before: 240,
                          after: 120,
                      },
                  },
              },
          ],
      },
      sections: [{
          children: [
              new Paragraph({
                  text: User.name,
                  heading: HeadingLevel.HEADING_1,
              }),
              new Paragraph({
                text: "----------------------------------------------------------------------------------------------------",
                heading: HeadingLevel.HEADING_3,
              }),
              new Paragraph({
                  text: "About",
                  heading: HeadingLevel.HEADING_2,
              }),
              new Paragraph({
                text: User.about,
                heading: HeadingLevel.HEADING_3
              }),
              new Paragraph({
                text: "Educational Qualifications",
                heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({
              text: User.education,
              heading: HeadingLevel.HEADING_3
            }),
            new Paragraph({
              text: "Skills",
              heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: User.skills,
            heading: HeadingLevel.HEADING_3
          }),
          new Paragraph({
            text: "Experience",
            heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          text: User.experience,
          heading: HeadingLevel.HEADING_3
        })
          ],
      }],
  });

    docx.Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, User.name + " CV.docx");
      console.log("Document created successfully");
    });
  }
  return (  
    <div id="word_root">
      <center>
      <h2>CV Ready to Download!</h2>
      <button onClick={start}>Download Now!</button>
      </center>
    </div>
  );
};

export default Word;
