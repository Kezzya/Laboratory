import React, { useContext } from "react";
import { LanguageContext } from "../../../languageWrapApp";
import { Header } from "../../header/header.component";
import { Template } from "../../template/template.component";
export const Contacts = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Header />
      <div>
        <Template title={`Руководители лаборатории`}>
          <div
            style={{
              display: `flex`,
              flexDirection: `column`,
              gap: `20px`,
              margin: `10px`,
              fontSize: `20px`,
            }}
          >
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                gap: `20px`,
              }}
            >
              <div>
                <img src={`../Zhusubaliyev.jpg`} />
              </div>
              {language === `RU` ? (
                <div>
                  <span style={{ fontWeight: `bold` }}>
                    Научный руководитель и основатель лаборатории:&nbsp;
                  </span>
                  доктор технических наук, профессор Жусубалиев Жаныбай
                  Турсунбаевич (Zhusubaliyev Zhanybai Т.), профессор кафедры
                  вычислительной техники Юго-Западного государственного
                  университета (ЮЗГУ). Проф. Жусубалиев Ж.Т. — ведущий ученый в
                  области нелинейной динамики и теории бифуркаций негладких
                  динамических систем в приложениях к силовой электронике,
                  электромеханике, теории автоматического управления,
                  математическому моделированию в эндокринологии и механике.
                  <div>&nbsp;</div>
                  <div>E-mail: zhanybai@gmail.com</div>
                </div>
              ) : (
                <div>
                  <span style={{ fontWeight: `bold` }}>
                    Scientific director and founder of the laboratory:&nbsp;
                  </span>
                  doctor of technical sciences, professor Zhusubaliev Zhanybay
                  Tursunbaevich (Zhusubaliyev Zhanybai T.), professor of the
                  department computer technology of the Southwestern State
                  University (SWSU). Prof. Zhusubaliev Zh.T. - leading scientist
                  areas of nonlinear dynamics and the theory of bifurcations of
                  non-smooth dynamic systems in applications to power
                  electronics, electromechanics, theory of automatic control,
                  mathematical modeling in endocrinology and mechanics.
                  <div>&nbsp;</div>
                  <div>E-mail: zhanybai@gmail.com</div>
                </div>
              )}
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                gap: `20px`,
              }}
            >
              <div>
                <img src="../Titov.jpg" style={{ height: `300px` }} />
              </div>
              {language === `RU` ? (
                <div>
                  <span style={{ fontWeight: `bold` }}>
                    Руководитель лаборатории и координатор:&nbsp;
                  </span>
                  доктор технических наук, доцент Титов Дмитрий Витальевич. Доц.
                  Титов Д.В. — доцент кафедры вычислительной техники, директор
                  Институт международного образования ЮЗГУ, член Экспертного
                  совета по международной деятельности при Комитете по
                  образованию Государственной думы РФ. Специалист по теории
                  систем автоматического управления, математическому
                  моделированию мехатронных систем с импульсным управлением.
                  Создание международного научного подразделения ЮЗГУ поддержали
                  ученые ведущих университетов Европы, Латинской Америки, Индии
                  и России, каждый из которых является крупнейшим и признанным в
                  мире специалистом по математическому моделированию нелинейных
                  систем, нелинейной динамике и хаосу, теории бифуркаций и
                  теории негладких динамических систем. Это ученые из следующих
                  университетов:
                  <div>&nbsp;</div>
                  <div>Телефон: +7 (4712) 50-47-99</div>
                  <div>E-mail: umsswsu@gmail.com</div>
                </div>
              ) : (
                <div>
                  <span style={{ fontWeight: `bold` }}>
                    Laboratory supervisor and coordinator:&nbsp;
                  </span>
                  Doctor of Technical Sciences, Associate Professor Titov Dmitry
                  Vitalievich. Assoc. Titov D.V. - Associate Professor of the
                  Department of Computer Science, Director of the Institute of
                  International Education of SWSU, Member of the Expert Council
                  on International Activities under the Committee on Education
                  of the State Duma. Specialist in the theory of automatic
                  systems control, mathematical modeling of mechatronic systems
                  with impulse control. Creation of an international scientific
                  subdivisions of SWSU were supported by scientists from leading
                  universities Europe, Latin America, India and Russia, each of
                  which is the world's largest and most recognized specialist in
                  mathematical modeling of nonlinear systems, nonlinear dynamics
                  and chaos, the theory of bifurcations and the theory of
                  non-smooth dynamic systems. These are scientists from the
                  following universities:
                  <div>&nbsp;</div>
                  <div>Phone: +7 (4712) 50-47-99</div>
                  <div>E-mail: umsswsu@gmail.com</div>
                </div>
              )}
            </div>
          </div>
        </Template>
      </div>
    </div>
  );
};
