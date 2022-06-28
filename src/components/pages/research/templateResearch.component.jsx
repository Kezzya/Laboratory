import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../../languageWrapApp";
import { Template } from "../../template/template.component";
const urlServer = "https://enigmatic-savannah-49524.herokuapp.com";
export const TemplateResearch = (props) => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === `RU` ? (
        <div>
          <Template title={props.Title}>
            <div
              style={{ display: `flex`, flexDirection: `column`, gap: `20px` }}
            >
              <div>{props.GeneralContent}</div>
              <div>
                {props.img.map((el, i) => {
                  let src = urlServer + el.attributes.url;
                  console.log(src);
                  return (
                    <img
                      src={src}
                      height={`300px`}
                      style={{ margin: `20px` }}
                    />
                  );
                })}
              </div>
            </div>
          </Template>
          <Template title="Основные публикации по результатам исследований">
            <div>{props.Publications}</div>
          </Template>
        </div>
      ) : (
        <div>
          <Template title={props.engTitle}>
            <div
              style={{ display: `flex`, flexDirection: `column`, gap: `20px` }}
            >
              <div> {props.engGeneralContent}</div>
              <div>
                {props.img.map((el) => {
                  //attributes.img.data.attributes.url
                  let src = urlServer + el.attributes.url;
                  return (
                    <img
                      src={src}
                      height={`300px`}
                      style={{ margin: `20px` }}
                    />
                  );
                })}
              </div>
            </div>
          </Template>
          <Template title="Key research publications">
            <div>{props.engPublications}</div>
          </Template>
        </div>
      )}
    </div>
  );
};
