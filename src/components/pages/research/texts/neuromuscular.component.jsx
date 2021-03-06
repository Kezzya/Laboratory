import { MathJax, MathJaxContext } from "better-react-mathjax";
import React, { useContext } from "react";
import { LanguageContext } from "../../../../languageWrapApp";
import { Template } from "../../../template/template.component";
import styles from "./neuromuscular.module.scss";

export const Neuromuscular = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {language === `RU` ? (
        <div>
          {" "}
          <Template
            title={`1. Автоматическое управление нейромышечной блокадой `}
          >
            <div style={{ margin: `auto` }}>
              <div style={{ fontWeight: `bold`, marginBottom: `20px` }}>
                Совместные исследования с Уппсальским университетом, Швеция
                (Department of Information Technology, Uppsala University,
                Sweden)
              </div>
              <div className={styles.imgs}>
                <figure>
                  <img src="/neuro.jpg" height="250px" />
                  <figcaption style={{ fontWeight: `bold` }}>
                    Измерение уровня нейромышечной блокады
                  </figcaption>
                </figure>
                <figure>
                  <img src="/galeno.png" height="250px" />
                  <figcaption style={{ fontWeight: `bold` }}>
                    Оборудование на платформе Galeno (из PhD диссертации
                    Margarida M. da Silva [1])
                  </figcaption>
                </figure>
              </div>
            </div>
          </Template>
          <Template title="Математическая модель">
            <div>
              <div>
                Стандартные физиологически обоснованные модели, описывающие
                взаимосвязь между введеной дозой анестетика u(t) и его эффектом,
                можно разделить на четыре каскадных блока, показанных на рисунке
                1.1. Первый блок связывает дозу анестетика u(t) с его
                концентрацией Cp(t) в плазме крови. Это составляет модель
                фармакокинетики РК (РК — pharmacokinetics). Физиологическая
                основа этой части состоит в предположении о наличии двух
                плазменных компартментов (центральной и периферийной).
              </div>
              <figure style={{ textAlign: `center` }}>
                <img
                  src="/scheme.jpg"
                  width="700px"
                  style={{ display: `flex`, margin: `10px auto 0px auto` }}
                />
                <figcaption>
                  Рис. 1.1. Структурная схема ПИД регулятора
                </figcaption>
              </figure>

              <div>
                Второй блок связывает концентрацию препарата в плазме крови
                Cр(t) с концентрацией препарата на месте его действия с(t): в
                случае миорелаксантов — нервномышечном соединении, а в случае
                снотворных и анальгетиков — в головном мозге. Третий блок
                описывает взаимосвязь между концентрацией с(t) и наблюдаемым
                эффектом Cе(t). Эти два блока представляют динамическую часть и
                описывают фармакодинамику (PD — pharmacodynamics), т.е.
                распределение лекарств в организме, которое зависит от
                нескольких транспортных и метаболических процессов. Четвертый
                блок на рис. 1.1 представляет нелинейность РD и связывает
                концентрацию эффекта Ce(t) с эффектом препарата в количественном
                выражении по измеренному уровню у(t) нейромышечной блокады NMB.
                Эта функуция зависит от восьми параметров, которые необходимо
                оценить на основе клинических данных. Управляющий сигнал u(t)
                формирует ПИД регулятор (PID) (Рис. 1.1){" "}
                <MathJaxContext>
                  <MathJax className={styles.font}>
                    {
                      "\\begin{equation} u(t)=K\\left(s(t) + T_i\\int \\varepsilon (s)ds + T_d\\dfrac{d\\varepsilon}{dt}\\right), \\varepsilon (t) = y_{ref} - y(t).\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
                При наличии надежных моделей фармакокинетики (PK) и
                фармакодинамики (PD) можно избежать недодозировки или
                передозировки, запрограммировав шприцевые насосы на целевые
                значения эффективности препарата. Существует несколько моеделей,
                одна из них, называемая "минимально параметризованная"
                (minimally parameterized), имеет вид
                <MathJaxContext>
                  <MathJax className={styles.font}>
                    {
                      "\\begin{equation}\\dot{x} = f(x), x=(x_1,x_2,x_3,x_4)^T, f(x)=(f_1,f_2,f_3,f_4)^T, где\\end{equation}"
                    }
                    {
                      "\\begin{equation}f_1=-\\alpha k_3x_1-\\alpha ^2k_1k_3KT_dФ^`(x_3)(x_2-x_3)+\\alpha k_3 K(y_ref-Ф(x_3))+\\dfrac{\\alpha k_3K}{T_i}x_4,\\end{equation}"
                    }
                    {
                      "\\begin{equation}f_2=\\alpha k_2(x_1-x_2), f_3=\\alpha k_1(x_2-x_3), f_4=y_{ref}-Ф(x_3), Ф(x_3)=\\dfrac{100C^{\\gamma}_{50}}{C^{\\gamma}_{50} +x^{\\gamma}_3}\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
                Здесь физический смысл переменных и параметров пояснены в наших
                публикациях.
              </div>
            </div>
          </Template>
          <Template title="Бифуркационный анализ">
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                margin: `auto`,
                gap: `40px`,
              }}
            >
              <div style={{ display: `flex`, gap: `20px`, flexWrap: `wrap` }}>
                <img src="/1.jpg" alt="img" height={`300px`} />
                <img src="/2.jpg" alt="img" height={`300px`} />
                <img src="/3.jpg" alt="img" height={`300px`} />
              </div>
              <div style={{ display: `flex`, gap: `20px`, flexWrap: `wrap` }}>
                <img src="/4.jpg" alt="img" height={`300px`} />
                <img src="/5.jpg" alt="img" height={`300px`} />
                <img src="/6.jpg" alt="img" height={`300px`} />
              </div>
            </div>
          </Template>
          <Template title="Публикации результатов исследований">
            <ul style={{ color: `black` }}>
              <li>
                Zh. T. Zhusubaliyev, A. Medvedev, M. Silva, Bifurcation Analysis
                for P1D-controller Tuning Based on a Minimal Neuromuscular
                Blockade Model in Closed-loop Anesthesia// 52nd IEEE Conference
                on Decision and Control, Firenze, Italy, 2013.
              </li>
              <li>
                Zh.T. Zhusubaliyev, A. Medvedev, M. Silva, Nonlinear Dynamics in
                Closed-loop Anesthesia: Pharmacokinetic/Pharmacodynamic Model
                under P1D-feedback//The 2014 American Control Conference (ACC
                2014), Portland, Oregon, USA.
              </li>
              <li>
                Zh. T. Zhusubaliyev, M. Silva, A. Medvedev, Automatic Recovery
                From Nonlinear Oscillations in P1D-Controlled Anesthetic Drug
                Delivery// European Control Conference (ECC 2015), Linz,
                Austria, 2015.
              </li>
              <li>
                Zh. T. Zhusubaliyev, A. Medvedev, M. Silva M, Bifurcation
                Analysis of PID Controlled Neuromuscular Blockade in Closed-loop
                Anesthesia//Journal of Process Control, 25, 152-163, 2015,
                (Impact Factor 3.624, квартиль Q1).
              </li>
              <li>
                A. Medvedev, Zh. T. Zhusubaliyev, O. Rosen, M. M. Silva,
                Oscillations-free PID control of anesthetic drug delivery in
                neuromuscular blockade//Computer Methods and Programs in
                Biomedicine, 171 119-131, 2019, (Impact Factor 3.632, квартиль
                Q1).
              </li>
            </ul>
          </Template>
        </div>
      ) : (
        <div>
          <Template
            title={`
            1. Automatic control of neuromuscular blockade `}
          >
            <div style={{ margin: `auto` }}>
              <div style={{ fontWeight: `bold`, marginBottom: `20px` }}>
                Joint research with Uppsala University, Sweden (Department of
                Information Technology, Uppsala University, Sweden)
              </div>
              <div className={styles.imgs}>
                <figure>
                  <img src="/neuro.jpg" height="250px" />
                  <figcaption style={{ fontWeight: `bold` }}>
                    Measuring the level of neuromuscular blockade
                  </figcaption>
                </figure>
                <figure>
                  <img src="/galeno.png" height="250px" />
                  <figcaption style={{ fontWeight: `bold` }}>
                    Platform Equipment Galeno (from PhD dissertations Margarida
                    M. da Silva [1])
                  </figcaption>
                </figure>
              </div>
            </div>
          </Template>
          <Template
            title="
Mathematical model"
          >
            <div>
              <div>
                Standard physiologically based models describing the
                relationship between the administered dose of anesthetic u(t)
                and its effect, can be divided into four cascade units shown in
                the figure 1.1. The first block relates the anesthetic dose u(t)
                to its concentration of Cp(t) in blood plasma. This makes up the
                model pharmacokinetics of RK (RK - pharmacokinetics).
                Physiological the basis of this part is the assumption that
                there are two plasma compartments (central and peripheral).
              </div>
              <figure style={{ textAlign: `center` }}>
                <img
                  src="/scheme.jpg"
                  width="700px"
                  style={{ display: `flex`, margin: `10px auto 0px auto` }}
                />
                <figcaption>
                  Pic. 1.1. Structural diagram of the PID controller
                </figcaption>
              </figure>

              <div>
                The second block relates the concentration of the drug in the
                blood plasma Cp(t) with the concentration of the drug at the
                site of its action c(t): in in the case of muscle relaxants, the
                neuromuscular junction, and in the case of sleeping pills and
                analgesics - in the brain. Third block describes the
                relationship between the concentration c(t) and the observed
                effect Ce(t). These two blocks represent the dynamic part and
                describe pharmacodynamics (PD - pharmacodynamics), i.e.
                distribution of drugs in the body, which depends on нескольких
                several transport and metabolic processes. Fourth block in fig.
                1.1 represents the non-linearity of PD and relates the
                concentration of the effect Ce(t) with the effect of the drug in
                a quantitative expressed in terms of the measured level y(t) of
                neuromuscular NMB blockade. This function depends on eight
                parameters that need to be evaluate based on clinical data.
                Control signal u(t) forms a PID controller (PID) (Pic. 1.1)
                <MathJaxContext>
                  <MathJax className={styles.font}>
                    {
                      "\\begin{equation} u(t)=K\\left(s(t) + T_i\\int \\varepsilon (s)ds + T_d\\dfrac{d\\varepsilon}{dt}\\right), \\varepsilon (t) = y_{ref} - y(t).\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
                With reliable models of pharmacokinetics (PK) and
                pharmacodynamics (PD) can avoid underdosing or overdose by
                programming syringe pumps to target drug efficacy values. There
                are several models one of them, called "minimally parameterized"
                (minimally parameterized), has the form
                <MathJaxContext>
                  <MathJax className={styles.font}>
                    {
                      "\\begin{equation}\\dot{x} = f(x), x=(x_1,x_2,x_3,x_4)^T, f(x)=(f_1,f_2,f_3,f_4)^T, где\\end{equation}"
                    }
                    {
                      "\\begin{equation}f_1=-\\alpha k_3x_1-\\alpha ^2k_1k_3KT_dФ^`(x_3)(x_2-x_3)+\\alpha k_3 K(y_ref-Ф(x_3))+\\dfrac{\\alpha k_3K}{T_i}x_4,\\end{equation}"
                    }
                    {
                      "\\begin{equation}f_2=\\alpha k_2(x_1-x_2), f_3=\\alpha k_1(x_2-x_3), f_4=y_{ref}-Ф(x_3), Ф(x_3)=\\dfrac{100C^{\\gamma}_{50}}{C^{\\gamma}_{50} +x^{\\gamma}_3}\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
                Here the physical meaning of the variables and parameters are
                explained in our publications.
              </div>
            </div>
          </Template>
          <Template title="Bifurcation Analysis">
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                margin: `auto`,
                gap: `40px`,
              }}
            >
              <div style={{ display: `flex`, gap: `20px`, flexWrap: `wrap` }}>
                <img src="/1.jpg" alt="img" height={`300px`} />
                <img src="/2.jpg" alt="img" height={`300px`} />
                <img src="/3.jpg" alt="img" height={`300px`} />
              </div>
              <div style={{ display: `flex`, gap: `20px`, flexWrap: `wrap` }}>
                <img src="/4.jpg" alt="img" height={`300px`} />
                <img src="/5.jpg" alt="img" height={`300px`} />
                <img src="/6.jpg" alt="img" height={`300px`} />
              </div>
            </div>
          </Template>
          <Template
            title="
Publications of research results"
          >
            <ul style={{ color: `black` }}>
              <li>
                Zh. T. Zhusubaliyev, A. Medvedev, M. Silva, Bifurcation Analysis
                for P1D-controller Tuning Based on a Minimal Neuromuscular
                Blockade Model in Closed-loop Anesthesia// 52nd IEEE Conference
                on Decision and Control, Firenze, Italy, 2013.
              </li>
              <li>
                Zh.T. Zhusubaliyev, A. Medvedev, M. Silva, Nonlinear Dynamics in
                Closed-loop Anesthesia: Pharmacokinetic/Pharmacodynamic Model
                under P1D-feedback//The 2014 American Control Conference (ACC
                2014), Portland, Oregon, USA.
              </li>
              <li>
                Zh. T. Zhusubaliyev, M. Silva, A. Medvedev, Automatic Recovery
                From Nonlinear Oscillations in P1D-Controlled Anesthetic Drug
                Delivery// European Control Conference (ECC 2015), Linz,
                Austria, 2015.
              </li>
              <li>
                Zh. T. Zhusubaliyev, A. Medvedev, M. Silva M, Bifurcation
                Analysis of PID Controlled Neuromuscular Blockade in Closed-loop
                Anesthesia//Journal of Process Control, 25, 152-163, 2015,
                (Impact Factor 3.624, квартиль Q1).
              </li>
              <li>
                A. Medvedev, Zh. T. Zhusubaliyev, O. Rosen, M. M. Silva,
                Oscillations-free PID control of anesthetic drug delivery in
                neuromuscular blockade//Computer Methods and Programs in
                Biomedicine, 171 119-131, 2019, (Impact Factor 3.632, квартиль
                Q1).
              </li>
            </ul>
          </Template>
        </div>
      )}
    </div>
  );
};
