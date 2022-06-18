import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../../../languageWrapApp";
import { Template } from "../../../template/template.component";

export const Results = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === `RU` ? (
        <div>
          <Template title="Внедрение результатов НИР">
            <div
              style={{
                display: `flex`,
                margin: `auto`,
                gap: `40px`,
                flexWrap: `wrap`,
              }}
            >
              <img src="train.jpg" width="300px" />
              <img src="intoTrain.jpg" width="300px" />
              <img src="controlPanel.jpg" width="300px" />
            </div>
          </Template>
          <Template title="1. Система управления электроприводами первого в СССР высокоскоростного электропоезда ЭР200">
            <span style={{ fontWeight: `bold` }}>
              Первый опытный электропоезд ЭР200 был построен Рижским
              вагоностроительным и Рижским электромашиностроительным заводами
              (РЭЗ и РВЗ) в 1973-1974 г. В 1975 г. после комплексных испытаний
              передан на Октябрьскую железную дорогу в депо ТЧ-8 (г. Ленинград).
              С 1977 г. по 1983 г. электропоезд ЭР200 совершал опытные поездки
              на линии Ленинград — Москва и обратно. Комплект систем управления
              электроприводами опытного электропоезда ЭР200 был разработан и
              изготовлен в НИИ автоматики и электромеханики (НИИ АЭМ) при
              Томском институте автоматизированных систем управления и
              радиоэлектроники. Система управления модернизировалась в течение
              всего периода опытной эксплуатации. Разработка и модернизация
              систем управления опытногоэлектропоезда ЭР200 выполнялись в 12
              отделе НИИ АЭМ научной группой (Колоколов Ю.В., Подлягин В.Н.,
              Букреев В.Г. и др.) под руководством проф. Зайцева Д.П.
              Электропоезд ЭР200 был поставлен на регулярную эксплуатацию
              пассажирами на линии Ленинград — Москва в 1984 г. В период с 1984
              г. по 1987 г. в НИИ АЭМ выполнены НИР по повышению надежности и
              технических характеристик системы управления тяговыми
              электроприводами с учетом реальных условий эксплуатации. Была
              разработана и реализована принципиально новая концепция
              управления: применение релейной системы с гистерезисом для
              управления электроприводами в режимах электродинамического
              торможения и релейной системы принудительной синхронизацией в
              тяговых режимах (А.С. № 1309238 СССР, МКИ Н 02 Р 5/16. Бюл. № 17.
              1987. А.С. № 1403320 СССР, МКИ Н 02 Р/175. Бюл. № 22). В 1987 г.
              на электроприводах всех секций электропоезда ЭР200 (стандартный
              состав поезда 6 секций, где каждая секция включает 2 вагона) была
              установлена новая системе управления. Авторы разработки:
              Жусубалиев Ж. Т., Колоколов Ю. В., Коваленко Ю. И. Система
              управления эксплуатировалась с 1987 г. по 1997 г., экспонировалась
              на ВДНХ СССР (1986—1987 гг.), отмечена одной золотой, двумя
              серебряными и двумя бронзовыми медалями.
            </span>
          </Template>
          <Template
            title={`2. Система управления электроприводами первого и второго электропоездов ЭР200`}
          >
            <span style={{ fontWeight: `bold` }}>
              <div>
                В соответствии с программой Госкомитета по науке и технике СССР
                выпуск второго электропоезда ЭР200 был намечен на в 1988-1989
                гг. Третий электропоезд ЭР200 предполагалось выпустить в 1990 г.
                Однако эту программу удалось реализовать частично. В 1991 г. РВЗ
                и РЭЗ успели построить только один состав. Требовалось
                доработать и изготовить систему управления электроприводами
                нового электропоезда ЭР200. Электрооборудование первого
                электропоезда также нуждалось в замене.
              </div>
              <div>
                В период c 1994 г. по 1997 г. Курским государственным
                техническим университетом (ныне Юго-Западный государственный
                университет) совместно с ОАО "Экспериментальный завод",
                Холдинговая компания "Ленивец" (г. Санкт-Петербург) разработана
                система управления электроприводами для первого и второго
                электропоездов ЭР200 (ЭР200 №1 и ЭР200 №2).
              </div>
              <div>
                Система реализована на базе релейной системы с гистерезисом и
                релейной системы с двойной принудительной синхронизацией (А.С. №
                1614966 СССР , В 60 L 15/04. Заяв. 09.02.89. Опубл. 23.12.90,
                Бюл. №47; А.С. № 1633904 СССР, МКИ Н02 Р 5/06. Заяв. 14.01.87.
                Опубл. 15.03.91, Бюл. №10; А.С. №1403320 СССР, МКИ Н 02 P/175.
                Заяв. 03.07.86. Опубл. 15.06.88, Бюл. №22).
              </div>
              <div>
                Релейная автоматическая система с двойной принудительной
                синхронизацией позволяла подавить недопустимые по условиям
                безопасности движения хаотические колебания, возникающие в
                режиме регулирования скорости ослаблением магнитного потока
                двигателей, улучшить эксплуатационные и точностные
                характеристики электроприводов. Кроме того, благодаря релейной
                системе с гистерезисом удалось полностью исключить
                перерегулирование в тормозных режимах, реализовать
                электродинамическое торможение тяговых двигателей при
                максимальной уставке тока якоря (тормозного момента), что
                повысило надежность и эффективность электрического торможения.
              </div>
              <div>
                Комплект систем управления внедрен в промышленную эксплуатацию в
                составе тягового электрооборудования двух электропоездов: ЭР200
                №1 и ЭР200 №2. Авторы разработки: Жусубалиев Ж.Т. Колоколов
                Ю.В., Борейша В.А.
              </div>
              <div style={{ marginTop: `10px` }}>
                За период эксплуатации первый советский высокоскоростной
                электропоезд ЭР200 совершил около 3000 рейсов и перевёз более
                1.3 млн пассажиров, 28 февраля 2009 года ЭР200 передал эстафету
                высокоскоростному электропоезду нового поколения "Сапсан".
              </div>
            </span>
          </Template>
        </div>
      ) : (
        <div>
          <Template title="Implementation of research results">
            <div
              style={{
                display: `flex`,
                margin: `auto`,
                gap: `40px`,
                flexWrap: `wrap`,
              }}
            >
              <img src="train.jpg" width="300px" />
              <img src="intoTrain.jpg" width="300px" />
              <img src="controlPanel.jpg" width="300px" />
            </div>
          </Template>
          <Template title="1. Electric drive control system of the first in the USSR high-speed electric train ER200">
            <span style={{ fontWeight: `bold` }}>
              The first experimental electric train ER200 was built by the Riga
              Carriage Building and Riga Electric Machine Building Plants in
              1973-1974. In 1975, after comprehensive tests transferred to the
              Oktyabrskaya railway in the depot ТЧ-8 (Leningrad).From 1977 to
              1983, the ER200 electric train made experimental trips on the
              Leningrad-Moscow line and back. Set control systems for electric
              drives of experimental electric train ER200 was developed and
              manufactured at the Research Institute of Automation and
              Electromechanics (NII AEM) at the Tomsk Institute of Automated
              Systems control and radio electronics. The control system has been
              upgraded during the entire period of trial operation. Development
              and modernization control systems of the experimental electric
              train ER200 were carried out in 12 department of the Research
              Institute of AEM by a scientific group (Kolokolov Yu.V., Podlyagin
              V.N., Bukreev V.G. and others) under the guidance of prof.
              Zaitseva D.P. Electric train ER200 was put into regular operation
              passengers on the Leningrad-Moscow line in 1984. AT the period
              from 1984 to 1987, R & D was carried out at the AEM Research
              Institute to increase reliability and technical characteristics of
              the traction control system electric drives, taking into account
              real operating conditions. Was a fundamentally new concept was
              developed and implemented control: the use of a relay system with
              hysteresis for control of electric drives in the modes of
              electrodynamic braking and relay system forced synchronization in
              traction modes (А.С. № 1309238 СССР, МКИ Н 02 Р 5/16. Бюл. № 17.
              1987. А.С. № 1403320 СССР, МКИ Н 02 Р/175. Бюл. № 22). In 1987 on
              the electric drives of all sections of the ER200 electric train
              (standard the composition of the train 6 sections, where each
              section includes 2 cars) was installed a new control system.
              Authors of the development: Zhusubaliev Zh. T., Kolokolov Yu. V.,
              Kovalenko Yu. I. System management was operated from 1987 to 1997,
              exhibited at VDNKh of the USSR (1986-1987), marked with one gold,
              two silver and two bronze medals.
            </span>
          </Template>
          <Template
            title={`2. Control system for electric drives of the first and second electric trains ER200`}
          >
            <span style={{ fontWeight: `bold` }}>
              <div>
                In accordance with the program of the State Committee for
                Science and Technology of the USSR the production of the second
                electric train ER200 was scheduled for 1988-1989 . The third
                electric train ER200 was supposed to be released in 1990.
                However, this program was partially implemented. In 1991 managed
                to build only one train. Required finalize and manufacture an
                electric drive control system new electric train ER200.
                Electrical equipment of the first electric trains also needed to
                be replaced.
              </div>
              <div>
                In the period from 1994 to 1997, the Kursk State Technical
                University (now Southwestern State University) together with JSC
                "Experimental Plant", Holding company "Lenivets" (St.
                Petersburg) was developed electric drive control system for the
                first and second ER200 electric trains (ER200 No. 1 and ER200
                No. 2).
              </div>
              <div>
                The system is implemented on the basis of a relay system with
                hysteresis and relay system with double forced synchronization
                (А.С. № 1614966 СССР , В 60 L 15/04. Заяв. 09.02.89. Опубл.
                23.12.90, Бюл. №47; А.С. № 1633904 СССР, МКИ Н02 Р 5/06. Заяв.
                14.01.87. Опубл. 15.03.91, Бюл. №10; А.С. №1403320 СССР, МКИ Н
                02 P/175. Заяв. 03.07.86. Опубл. 15.06.88, Бюл. №22).
              </div>
              <div>
                Relay automatic system with double forced synchronization made
                it possible to suppress conditions that are unacceptable traffic
                safety chaotic oscillations that occur in Flux Decay Speed
                ​​Control Mode engines, improve operational and accuracy
                characteristics of electric drives. In addition, thanks to the
                relay system with hysteresis was able to completely eliminate
                overshoot in braking modes, implement electrodynamic braking of
                traction motors at the maximum setting of the armature current
                (braking torque), which increased the reliability and efficiency
                of electric braking.
              </div>
              <div>
                A set of control systems has been put into commercial operation
                in as part of the traction electrical equipment of two electric
                trains: ER200 No. 1 and ER200 No. 2. Authors of the development:
                Zhusubaliev Zh.T. Bells Yu.V., Boreisha V.A.
              </div>
              <div style={{ marginTop: `10px` }}>
                During the period of operation, the first Soviet high-speed
                ER200 electric train made about 3,000 trips and transported more
                than 1.3 million passengers, February 28, 2009 Estonia200 passed
                the baton high-speed electric train of the new generation
                "Sapsan".
              </div>
            </span>
          </Template>
        </div>
      )}
    </div>
  );
};
