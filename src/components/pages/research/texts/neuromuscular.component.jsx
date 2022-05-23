import React, { useContext } from "react";
import { LanguageContext } from "../../../../languageWrapApp";
import { Template } from "../../../template/template.component";
import styles from "./neuromuscular.module.scss";
export const Neuromuscular = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Template title={`1. Автоматическое управление нейромышечной блокадой `}>
        <div className="">
          <div style={{ fontWeight: `bold` }}>
            Совместные исследования с Уппсальским университетом, Швеция
            (Department of Information Technology, Uppsala University, Sweden)
          </div>
          <div className={styles.imgs}>
            <figure>
              <img src="/neuro.jpg" height="380px" />
              <figcaption style={{ fontWeight: `bold` }}>
                Измерение уровня нейромышечной блокады
              </figcaption>
            </figure>
            <figure>
              <img src="/galeno.png" height="380px" />
              <figcaption style={{ fontWeight: `bold` }}>
                Оборудование на платформе Galeno (из PhD диссертации Margarida
                M. da Silva [1])
              </figcaption>
            </figure>
          </div>

          <div>
            Стандартные физиологически обоснованные модели, описывающие
            взаимосвязь между введеной дозой анестетика u(t) и его эффектом,
            можно разделить на четыре каскадных блока, показанных на рисунке
            1.1. Первый блок связывает дозу анестетика u(t) с его концентрацией
            Cp(t) в плазме крови. Это составляет модель фармакокинетики РК (РК —
            pharmacokinetics). Физиологическая основа этой части состоит в
            предположении о наличии двух плазменных компартментов (центральной и
            периферийной).
          </div>
          <figure style={{ textAlign: `center` }}>
            <img
              src="/scheme.jpg"
              width="700px"
              style={{ display: `flex`, margin: `auto` }}
            />
            <figcaption>Рис. 1.1. Структурная схема ПИД регулятора</figcaption>
          </figure>

          <div>
            Второй блок связывает концентрацию препарата в плазме крови Cр(t) с
            концентрацией препарата на месте его действия с(t): в случае
            миорелаксантов — нервномышечном соединении, а в случае снотворных и
            анальгетиков — в головном мозге. Третий блок описывает взаимосвязь
            между концентрацией с(t) и наблюдаемым эффектом Cе(t). Эти два блока
            представляют динамическую часть и описывают фармакодинамику (PD —
            pharmacodynamics), т.е. распределение лекарств в организме, которое
            зависит от нескольких транспортных и метаболических процессов.
            Четвертый блок на рис. 1.1 представляет нелинейность РD и связывает
            концентрацию эффекта Ce(t) с эффектом препарата в количественном
            выражении по измеренному уровню у(t) нейромышечной блокады NMB. Эта
            функуция зависит от восьми параметров, которые необходимо оценить на
            основе клинических данных.
          </div>
        </div>
      </Template>
      <Template title="Публикации результатов исследований">
        <ul style={{ color: `black` }}>
          <li>
            Zh. T. Zhusubaliyev, A. Medvedev, M. Silva, Bifurcation Analysis for
            P1D-controller Tuning Based on a Minimal Neuromuscular Blockade
            Model in Closed-loop Anesthesia// 52nd IEEE Conference on Decision
            and Control, Firenze, Italy, 2013.
          </li>
          <li>
            Zh.T. Zhusubaliyev, A. Medvedev, M. Silva, Nonlinear Dynamics in
            Closed-loop Anesthesia: Pharmacokinetic/Pharmacodynamic Model under
            P1D-feedback//The 2014 American Control Conference (ACC 2014),
            Portland, Oregon, USA.
          </li>
          <li>
            Zh. T. Zhusubaliyev, M. Silva, A. Medvedev, Automatic Recovery From
            Nonlinear Oscillations in P1D-Controlled Anesthetic Drug Delivery//
            European Control Conference (ECC 2015), Linz, Austria, 2015.
          </li>
          <li>
            Zh. T. Zhusubaliyev, A. Medvedev, M. Silva M, Bifurcation Analysis
            of PID Controlled Neuromuscular Blockade in Closed-loop
            Anesthesia//Journal of Process Control, 25, 152-163, 2015, (Impact
            Factor 3.624, квартиль Q1).
          </li>
          <li>
            A. Medvedev, Zh. T. Zhusubaliyev, O. Rosen, M. M. Silva,
            Oscillations-free PID control of anesthetic drug delivery in
            neuromuscular blockade//Computer Methods and Programs in
            Biomedicine, 171 119-131, 2019, (Impact Factor 3.632, квартиль Q1).
          </li>
        </ul>
      </Template>
    </div>
  );
};
