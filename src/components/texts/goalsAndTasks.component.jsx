import React, { useContext } from "react";
import { LanguageContext } from "../../languageWrapApp";
import styles from "./goalsAndTasks.module.scss";
export const GoalsAndTasks = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === `RU` ? (
        <div className="RU">
          <span style={{ fontWeight: `bold` }}>
            Международная научная лаборатория динамики негладких систем ЮЗГУ -
            это единственная в России научная лаборатория мирового уровня по
            теории негладких динамических систем.
          </span>
          <div>
            <span style={{ color: `blue` }}>Цели и задачи</span>
          </div>
          <div>
            <li>
              Привлечение талантливой молодёжи в науку и создание реальных
              условий для их интеграции в мировой научный рынок.
            </li>
            <li>
              Привлечение студентов к научным исследованиям по приоритетным
              направлениям теории негладких систем. Увеличение международной
              академической мобильности студентов, аспирантов, молодых ученых и
              преподавателей ЮЗГУ.
            </li>
            <li>
              Усиление мирового уровня научных исследований и образовательной
              деятельности ЮЗГУ.
            </li>
            <li>
              Увеличение доли масштабных фундаментальных научных исследований с
              привлечением ведущих зарубежных ученых при поддержке отечественных
              и международных научных фондов.
            </li>
          </div>
          <div>
            <span style={{ fontWeight: `bold` }}>
              Созадние международного научного подразделения ЮЗГУ поддержали
              ученые ведущих университетов Европы, Латинской Америки, Индии и
              России
            </span>
            , каждый из которых является крупнейшим и признанным в мире
            специалистом по нелинейной динамики и хаосу, теории бифуркаций
            негладких динамических систем:
          </div>
          <div>
            <ul>
              <li>
                1. Prof Laura Gardini, University of Urbino Carlo Bo
                (университет основан в 1506 r.), Italy
              </li>
              <li>
                2. Prof. Mario di Bernardo. University of Naples Federico II
                (университет основан в 1224 r.), Italy.
              </li>
              <li>
                3. Prof. Alexander Medvedev, Uppsala University (университет
                основан в 1477 r.), Sweden.
              </li>
              <li>
                4. Prof. Nikolay V. Kuznetsov, Санкт-Петербургский
                государственный университет (университет основан в 1724 г.).
                Математико-механический факультет, University of Jyväskylä
                (университет основан в 1863 г.), Finland.
              </li>
              <li>
                5. Assistant Prof. Anton V. Proskurnikov, Polytechnic University
                of Turin (университет основан в 1859 r.), Italy.
              </li>
              <li>
                6. Prof. Petri Piiroinen, Chalmers University of Technology
                Gothenburg (университет основан в 1829 r.), Sweden.
              </li>
              <li>
                7. Prof. Viktor Avrutin. University of Stuttgart (университет
                основан в 1829 r.). Germany.
              </li>
              <li>
                8. Prof. Abdelali El Aroudi, Universitat Rovira i Virgili
                (университет основан в 1991 r ), Spain.
              </li>
              <li>
                9. Prof. Soumitro Banerjee. Indian Institute of Science
                Education and Research—Kolkata (университет основан в 2006 r.).
                India.
              </li>
              <li>
                10. Prof. Gerard Olivar Tost, University of Aysén (университет
                основан в 2015 r.), Chile.
              </li>
            </ul>
          </div>
          <div>
            Перечисленные ученые - это основатели и руководители ведущих научных
            групп по теории негладких динамических систем , коллеги проф.
            Жусубалиева Ж.Т., с которыми он проводит совместные научные
            исследования в течение многих лет (более 8-15 лет), принимают
            участие в выполнении НИР в рамках деятельности международного
            подразделения ЮЗГУ.
          </div>
        </div>
      ) : (
        <div className="EN">
          <span style={{ fontWeight: `bold` }}>
            International Scientific Laboratory for Dynamics of Non-smooth
            Systems SWSU - it is the only scientific laboratory of international
            level in Russia theory of non-smooth internal systems.
          </span>
          <div>
            <span style={{ color: `blue` }}>Goals and objectives</span>
          </div>
          <div>
            <li>
              Attracting talented youth to science and education conditions for
              their use in the world scientific market.
            </li>
            <li>
              Involving students in scientific research on priority directions
              of the theory of nonsmooth systems. Increase in international
              academic mobility of students, graduate students, young scientists
              and SWSU teachers.
            </li>
            <li>
              Strengthening world-class scientific research and educational
              activities of SWSU.
            </li>
            <li>
              Increasing the share of large-scale fundamental scientific
              research with involving leading foreign scientists with the
              support of domestic and international scientific foundations.
            </li>
          </div>
          <div>
            <span style={{ fontWeight: `bold` }}>
              The creation of the international scientific division of SWSU
              supported scientists from leading universities in Europe, Latin
              America, India and Russia
            </span>
            , each of which is the largest and most recognized in the world
            specialist in nonlinear dynamics and chaos, bifurcation theory
            nonsmooth dynamical systems:
          </div>
          <div className={styles.list}>
            <ul>
              <li>
                1. Prof Laura Gardini, University of Urbino Carlo Bo (university
                was founded in 1506), Italy
              </li>
              <li>
                2. Prof. Mario di Bernardo. University of Naples Federico II
                (University was founded in 1224), Italy.
              </li>
              <li>
                3. Prof. Alexander Medvedev, Uppsala University (university was
                founded in 1477), Sweden.
              </li>
              <li>
                4. Prof. Nikolay V. Kuznetsov, Saint Petersburg state university
                (the university was founded in 1724). Faculty of Mathematics and
                Mechanics, University of Jyväskylä (university was founded in
                1863), Finland.
              </li>
              <li>
                5. Assistant Prof. Anton V. Proskurnikov, Polytechnic University
                of Turin (university was founded in 1859), Italy.
              </li>
              <li>
                6. Prof. Petri Piiroinen, Chalmers University of Technology
                Gothenburg (university was founded in 1829), Sweden.
              </li>
              <li>
                7. Prof. Viktor Avrutin. University of Stuttgart (university was
                founded in 1829). Germany.
              </li>
              <li>
                8. Prof. Abdelali El Aroudi, Universitat Rovira i Virgili
                (university was founded in 1991), Spain.
              </li>
              <li>
                9. Prof. Soumitro Banerjee. Indian Institute of Science
                Education and Research—Kolkata (university was founded 2006 r.).
                India.
              </li>
              <li>
                10. Prof. Gerard Olivar Tost, University of Aysén (university
                was founded 2015 r.), Chile.
              </li>
            </ul>
          </div>
          <div>
            Listed research studies group on the theory of non-smooth
            atmospheric systems, colleagues prof. Zhusubaliev Zh.T., with
            repetition he repeats joint scientific research. study for many
            years (more than 8-15 years), take participation in the
            implementation of research in the framework of international
            activities subdivision of SWSU.
          </div>
        </div>
      )}
    </div>
  );
};
