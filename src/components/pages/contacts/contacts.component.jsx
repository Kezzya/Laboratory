import React from "react";
import { Header } from "../../header/header.component";
import { Template } from "../../template/template.component";
export const Contacts = () => {
  return (
    <div>
      <Header />
      <div>
        <Template title={`Руководители лаборатории`}>
          <div
            style={{
              display: `flex`,
              gap: `20px`,
              margin: `10px`,
              fontSize: `20px`,
            }}
          >
            <div>
              <img src={`../Zhusubaliyev.jpg`} />
            </div>
            <div>
              <span style={{ fontWeight: `bold` }}>
                Научный руководитель и основатель лаборатории:&nbsp;
              </span>
              доктор технических наук, профессор Жусубалиев Жаныбай Турсунбаевич
              (Zhusubaliyev Zhanybai Т.), профессор кафедры вычислительной
              техники Юго-Западного государственного университета (ЮЗГУ). Проф.
              Жусубалиев Ж.Т. — ведущий ученый в области нелинейной динамики и
              теории бифуркаций негладких динамических систем в приложениях к
              силовой электронике, электромеханике, теории автоматического
              управления, математическому моделированию в эндокринологии и
              механике.
              <div>&nbsp;</div>
              <div>E-mail: zhanybai@gmail.com</div>
            </div>
          </div>
          <div
            style={{
              display: `flex`,
              gap: `20px`,
              margin: `10px`,
              fontSize: `20px`,
            }}
          >
            <img src="../Titov.jpg" style={{ height: `300px` }} />
            <div>
              <span style={{ fontWeight: `bold` }}>
                Руководитель и координатор работы лаборатории:&nbsp;
              </span>
              доктор технических наук, доцент Титов Дмитрий Витальевич. Доц.
              Титов Д.В. — доцент кафедры вычислительной техники, директор
              Институт международного образования ЮЗГУ, член Экспертного совета
              по международной деятельности при Комитете по образованию
              Государственной думы РФ. Специалист по теории систем
              автоматического управления, математическому моделированию
              мехатронных систем с импульсным управлением. Создание
              международного научного подразделения ЮЗГУ поддержали ученые
              ведущих университетов Европы, Латинской Америки, Индии и России,
              каждый из которых является крупнейшим и признанным в мире
              специалистом по математическому моделированию нелинейных систем,
              нелинейной динамике и хаосу, теории бифуркаций и теории негладких
              динамических систем. Это ученые из следующих университетов:
              <div>&nbsp;</div>
              <div>Телефон: +7 (4712) 50-47-99</div>
              <div>E-mail: umsswsu@gmail.com</div>
            </div>
          </div>
        </Template>
      </div>
    </div>
  );
};
