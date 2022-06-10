import { MathJax, MathJaxContext } from "better-react-mathjax";
import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../../../languageWrapApp";
import { Template } from "../../../template/template.component";
import styles from "./displayBorders.module.scss";
export const Testosterone = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === `RU` ? (
        <div>
          {" "}
          <Template title="4. Регуляция уровня тестостерона в мужсокм организме">
            <div>
              <figure>
                <img
                  src="/testosterone/1.png"
                  height={`400px`}
                  style={{ display: `flex`, margin: `10px 10px 0px 0px` }}
                />
                <figcaption>
                  Рис. 4.1. Схема гипоталамо-гипофизарно-тестикулярной оси.
                  Здесь FSH - фолликулостимулирующий гормон
                  (Follicle-Stimulating Hormone)
                </figcaption>
              </figure>
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                gap: `20px`,
                marginTop: `5px`,
              }}
            >
              <div>
                Тестостерон - основной андрогенный стероидный гормон. В
                регуляции уровня тестостерона (Те) основную роль играют
                лютеинизирующий гормон (LH - luteinizing hormone) и гонадотропин
                релизинг гормон (GnRH - gonadotropin-releasing hormone). LH и
                GnRH громоны генерируются в. отделах головного мозга,
                соответственно в гипофизе и гипоталамусе. Поэтому динамика LH и
                особенно GnRH тесно связана с динамикой нейронов мозга и носит
                импульсный характер. При этом GnRH стимулирует секрецию LH. Как
                только LH достигает яичек через кровь, он стимулирует
                специальные клетки в семенниках, называемые клетками Лейдига.
                Эти клетки в конечном счете отвечают за выработку тестостерона у
                мужчин. У женщин — специализированные клетки в яичниках,
                называемые клетками тека (theca cells). По мере повышения уровня
                тестостерона в сыворотке крови в гипофиз и гипоталамус
                посылаются сигналы о прекращении стимуляции выработки
                тестостерона. Таким образом Te подавляет секрецию GnRH и LH.
              </div>
              <div>
                С точки зрения теории управления клетки гипоталамуса,
                генерирующие GnRH, можно рассматривать как импульсный элемент,
                осуществляющий амплитудно-частотную модуляцию. При этом уровень
                Te выступает в качестве модулирующего сигнала, а уровень GnRH -
                в качестве модулированного импульсного сигнала. С увеличением
                уровня Te импульсы появляются реже, а их их амплитуда
                уменьшается. Что касается наблюдаемого импульсного процесса
                секреции LH, то его можно рассматривать как реакцию непрерывной
                части системы на импульсный сигнал, поступающий от гипоталамуса.
              </div>
            </div>
          </Template>
          <Template title="4.1. Импульсная модель регуляции уровня тестостерона у мужчин">
            <div
              style={{
                display: `flex`,
                margin: `auto`,
                gap: `40px`,
                flexWrap: `wrap`,
              }}
            >
              <img
                src="/testosterone/2.jpg"
                height={`350px`}
                style={{ display: `flex`, margin: `10px 10px 0px 0px` }}
              />{" "}
              <img
                src="/testosterone/3.jpg"
                height={`350px`}
                style={{ display: `flex`, margin: `10px 10px 0px 0px` }}
              />{" "}
              <img
                src="/testosterone/4.jpg"
                height={`350px`}
                style={{ display: `flex`, margin: `10px 10px 0px 0px` }}
              />
            </div>
            <div style={{ margin: `auto` }}>
              <MathJaxContext>
                <MathJax style={{ fontSize: `24px` }} className={styles.font}>
                  {
                    "\\begin{equation} x = -b_1 * x, y = g_1 * x - b_2 * y, z = -b_3 * z + g_2 * y, x(t^+_k) = x (t^-_k) + F(z(t_k)),\\end{equation}"
                  }
                  {
                    "\\begin{equation}t_{k+1}=t_k + Ф(z(t_k)), Ф(z)=k_1 + k_2\\dfrac{(z/h)^P}{1 + (z/h)^P}, F(z) = k_3 + \\dfrac{k_4}{1 + (z/h)^P}.\\end{equation}"
                  }
                </MathJax>
              </MathJaxContext>
            </div>
            <div style={{ display: `flex`, flexDirection: `column` }}>
              <div>
                <span style={{ fontWeight: `bold` }}>
                  Здесь x = GnRH, y = LH, z = Te - концентрация гормонов GnRH LH
                  и Te; b1,b2,b3,k1,k2,k3,k4,g1,g2,h и p - параметры.
                </span>
              </div>
              <div style={{ display: `flex`, gap: `20px` }}>
                <figure>
                  <img
                    src="/testosterone/5.jpg"
                    alt="img"
                    height={`300px`}
                    style={{ margin: `15px` }}
                  />
                  <img
                    src="/testosterone/6.jpg"
                    alt="img"
                    height={`300px`}
                    style={{ margin: `15px` }}
                  />
                  <img
                    src="/testosterone/7.jpg"
                    alt="img"
                    height={`300px`}
                    style={{ margin: `15px` }}
                  />
                  <img
                    src="/testosterone/8.jpg"
                    alt="img"
                    height={`300px`}
                    style={{ margin: `15px` }}
                  />
                  <figcaption>
                    Переход к хаосу через классический каскад бифуркаций
                    удвоения периода
                  </figcaption>
                </figure>
              </div>
            </div>
          </Template>
          <Template title="4.2 Импульсная модель регуляции уровня тестостерона с запаздыванием">
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                gap: `40px`,
                margin: `auto`,
              }}
            >
              <div>
                <img src="/testosterone/9.jpg" height={`600px`} />
              </div>
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  gap: `40px`,
                }}
              >
                <img src="/testosterone/10.jpg" height={`300px`} />
                <img src="/testosterone/12.jpg" height={`300px`} />
              </div>
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  gap: `40px`,
                }}
              >
                <img src="/testosterone/11.jpg" height={`300px`} />
                <img src="/testosterone/13.jpg" height={`300px`} />
              </div>
            </div>
            <div style={{ margin: `auto` }}>
              <MathJaxContext>
                <MathJax style={{ fontSize: `24px` }} className={styles.font}>
                  {
                    "\\begin{equation} x = -b_1 * x, y = g_1 * x - b_2 * y, z = -b_3 * z + g_2 * y(t - \\tau),\\end{equation}"
                  }
                  {
                    "\\begin{equation} x(t^+_k) = x (t^-_k) + F(z(t_k)), t_{k+1}=t_k + Ф(z(t_k)),\\end{equation}"
                  }
                  {
                    "\\begin{equation} Ф(z)=k_1 + k_2\\dfrac{(z/h)^P}{1 + (z/h)^P}, F(z) = k_3 + \\dfrac{k_4}{1 + (z/h)^P}.\\end{equation}"
                  }
                </MathJax>
              </MathJaxContext>
            </div>
          </Template>
          <Template title="4.3 Импульсная модель с локальной обратной связью">
            <div>
              <div
                style={{
                  display: `flex`,
                  flexDirection: `row`,
                  margin: `auto`,
                  gap: `80px`,
                }}
              >
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `10px`,
                  }}
                >
                  <figure>
                    <img src="/testosterone/14.jpg" height={`600px`} />
                    <img src="/testosterone/15.jpg" height={`400px`} />
                    <figcaption>
                      Схема эндокринной оси гипоталамус-гипофиз. 1 - Функция
                      Хилла h(z), описывающая внутреннюю обратную связь, 2 -
                      кусочно-линейная аппроксимация h(z)
                    </figcaption>
                  </figure>
                </div>
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `10px`,
                  }}
                >
                  <figure>
                    <div
                      style={{
                        display: `flex`,
                        flexDirection: `row`,
                        gap: `10px`,
                      }}
                    >
                      <img src="/testosterone/16.jpg" height={`500px`} />
                      <img src="/testosterone/17.jpg" height={`500px`} />
                    </div>
                    <div
                      style={{
                        display: `flex`,
                        flexDirection: `row`,
                        gap: `10px`,
                      }}
                    >
                      <img src="/testosterone/18.jpg" height={`500px`} />
                      <img src="/testosterone/19.jpg" height={`500px`} />
                      <img src="/testosterone/20.jpg" height={`500px`} />
                    </div>
                    <figcaption>
                      Мультистабильность и кризисы хаотических аттракторов
                      (merging или merging crisis, expansion или interior
                      crisis, final или boundary crisis bifurcations)
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div style={{ margin: `auto` }}>
                <MathJaxContext>
                  <MathJax style={{ fontSize: `24px` }} className={styles.font}>
                    {
                      "\\begin{equation} x = -b_1 * x, y = g_1 * x - b_2 * y + h(z), z = g_2 * y - b_3 * z, x(t^+_k) + F(z(t_k)),\\end{equation}"
                    }
                    {
                      "\\begin{equation} t_{k+1} = t_k + Ф(z(t_k)),Ф(z)=k_1 + k_2\\dfrac{(z/h)^P}{1 + (z/h)^P}, F(z) = k_3 + \\dfrac{k4}{1 + (z/h)^P},\\end{equation}"
                    }
                    {
                      "\\begin{equation} h(z) = b + \\dfrac{a}{1 + k * (z/r)^s}, b \\geq 0, s > 0, r > 0, a > 0, k > 0.\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
              </div>
            </div>
          </Template>
          <Template title="Основные публикации по результатам исследований">
            <ul style={{ color: `black` }}>
              <li>
                1. Zh.T. Zhusubaliyev, A.N. Churilov, A. Medvedev, Bifurcation
                Phenomena in an Impulsive Model of Non-Basal Testosterone
                Regulation// Chaos, 22(1), 013121, 2012 (Impact Factor 2.643,
                квартиль Q1).
              </li>
              <li>
                2. Zh. T. Zhusubaliyev, E. Mosekilde, A.N. Churilov, A.
                Medvedev, Multistability and Hidden Attractors in an Impulsive
                Goodwin Oscillator with Time Delay//The European Physical
                Journal. Special Topics. 224(8), 1519-1539, 2015 (Impact Factor
                1.660, квартиль Q2).
              </li>
              <li>
                3. A.N. Churilov, A. Medvedev, Zh. T. Zhusubaliyev, Impulsive
                Goodwin Oscillator with Large Delay: Periodic Oscillations,
                Bistability, and Attractors//Nonlinear Analysis: Hybrid Systems,
                21, 171-183, 2016 (Impact Factor 5.881, квартиль Q1).
              </li>
              <li>
                4. A. N. Churilov, A. Medvedev, Zh. T. Zhusubaliyev,
                Discrete-Time Mapping for an Impulsive Goodwin Oscillator with
                Three Delays//International Journal of Bifurcation and Chaos,
                27(12), 1750182 (17 pages), 2017 (Impact Factor 2.469, квартиль
                Q1).
              </li>
              <li>
                5. A. Medvedev, P. Mattsson, Zh. T. Zhusubaliyev, V. Avrutin,
                Nonlinear Dynamics and Entrainment in a Continuously Forced
                Pulse-Modulated Model of Testosterone Regulation//Nonlinear
                Dynamics, 94, 1165-1181, 2018 (Impact Factor 5.03, квартиль Q1).
              </li>
              <li>
                6. A. Medvedev, A. V. Proskurnikov, Zh. T. Zhusubaliyev,
                Mathematical modeling of endocrine regulation subject to
                circadian rhythm//Annual Reviews in Control, 46, 148-164, 2018
                (Impact Factor 4.987, квартиль Q1).
              </li>
              <li>
                7. Yamalova D., Medvedev A., Zhusubaliyev Zh.T., Bifurcation
                analysis for non-local design of a hybrid observer for the
                impulsive Goodwin's oscillator//Nonlinear Dynamics, 100,
                1401-1419, 2020 (Impact Factor 5.03, квартиль Q1).
              </li>
              <li>
                8. Zh. T. Zhusubaliyev, A.N. Churilov and A. Medvedev, Complex
                Dynamic Phenomena in a Low-Order Model of Non-Basal Testosterone
                Regulation// 50th IEEE Conference on Decision and Control and
                European Control Conference (CDC-ECC) Orlando, Florida, USA,
                December 12-15, 879-884 (2011).
              </li>
              <li>
                9. Zh.T. Zhusubaliyev, A.N. Churilov, A. Medvedev, Complex
                Dynamics and Chaos in a Scalar Linear Continuous System with
                Impulsive Feedback// Proc. of the 2012 American Control
                Conference, Montreal, Canada, 27-29 June, 2419-2424 (2012).
              </li>
              <li>
                10. A.N. Churilov, A. Medvedev , Zh.T. Zhusubaliyev, State
                Observer for a First-order Plant Under Intrinsic Pulse-modulated
                Feedback: a Case Study// Proc. European Control Conference
                (ECC13), Zurich, Switzerland, July 17-19, 2122-2127, 2013.
              </li>
              <li>
                11. A.N. Churilov, A. Medvedev , Zh.T. Zhusubaliyev, Periodic
                Modes and Bistability in an Impulsive Goodwin Oscillator with
                Large Delay// Proceedings of the 19th IFAC World Congress, Cape
                Town, South Africa, August 24-29 2014, Vol. 19, Part 1,
                3340-3345.
              </li>
              <li>
                12. A. Churilov, A. Medvedev, Zh. T. Zhusubaliyev, Delay-Induced
                Dynamical Phenomena in Impulsive Goodwin's Oscillator: What We
                Know So Far, Invited Session: Biological Oscillators// 54th IEEE
                Conference on Decision and Control, Osaka, Japan, December
                15-18, 2015.
              </li>
              <li>
                13. P. Mattsson, A. Medvedev, Zh. T. Zhusubaliyev,
                Pulse-modulated Model of Testosterone Regulation Subject to
                Exogenous Signals// 55th IEEE Conference on Decision and
                Control, December 12-14, 2016, Las Vegas, NV, USA.
              </li>
              <li>
                14. A. Medvedev, A. V. Proskurnikov, Zh. T. Zhusubaliyev,
                Entrainment in Harmonically Forced Continuous and Impulsive
                Goodwin's Oscillators: A Comparison Study// Proceedings of the
                European Control Conference (ECC 2018), June 12-15, 2018.
                Limassol, Cyprus, 2018, (2046 — 2051).
              </li>
              <li>
                15. Yamalova D., A. Medvedev, Zh. T. Zhusubaliyev, A. V.
                Proskurnikov, Nonlinear dynamics of a positive hybrid observer
                for the impulsive Goodwin's oscillator: a design study//
                Proceedings of the 2019 IEEE 58th Conference on Decision and
                Control (CDC 2019), 11-13 Dec. 2019. Nice, France, France, 2019,
                (2046 — 2051).
              </li>
            </ul>
          </Template>
        </div>
      ) : (
        <div>
          {" "}
          <Template title="4. Regulation of testosterone levels in the male body">
            <div>
              <figure>
                <img
                  src="/testosterone/1.png"
                  height={`400px`}
                  style={{ display: `flex`, margin: `10px 10px 0px 0px` }}
                />
                <figcaption>
                  Pic. 4.1. Scheme of the hypothalamic-pituitary-testicular
                  axis. Here FSH is follicle stimulating hormone.
                  (Follicle-Stimulating Hormone)
                </figcaption>
              </figure>
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                gap: `20px`,
                marginTop: `5px`,
              }}
            >
              <div>
                Testosterone is the main androgenic steroid hormone. AT
                regulation of testosterone levels (Te) play a major role
                luteinizing hormone (LH - luteinizing hormone) and gonadotropin
                releasing hormone (GnRH - gonadotropin-releasing hormone). LH
                and GnRH thunders are generated at. parts of the brain, in the
                pituitary and hypothalamus, respectively. Therefore, the
                dynamics of LH and especially GnRH is closely related to the
                dynamics of neurons in the brain and is impulsive nature. At the
                same time, GnRH stimulates the secretion of LH. How only LH
                reaches the testicles through the blood, it stimulates special
                cells in the testicles called Leydig cells. These cells are
                ultimately responsible for the production of testosterone in
                men. In women, specialized cells in the ovaries called theca
                cells. As you level up serum testosterone to the pituitary and
                hypothalamus signals are sent to stop stimulation of production
                testosterone. Thus, Te suppresses the secretion of GnRH and LH.
              </div>
              <div>
                From the point of view of the hypothalamic cell control theory,
                generating GnRH can be considered as an impulse element,
                performing amplitude-frequency modulation. At the same time, the
                level Te acts as a modulating signal, and the GnRH level as a
                modulated pulse signal. With the increase Te level pulses appear
                less frequently, and their amplitude decreases. As regards the
                observed impulsive process secretion of LH, then it can be
                considered as a reaction of continuous parts of the system to an
                impulse signal coming from the hypothalamus.
              </div>
            </div>
          </Template>
          <Template title="4.1. Pulse model of testosterone regulation in men">
            <div
              style={{
                display: `flex`,
                margin: `auto`,
                gap: `40px`,
                flexWrap: `wrap`,
              }}
            >
              <img
                src="/testosterone/2.jpg"
                height={`350px`}
                style={{ display: `flex`, margin: `10px 10px 0px 0px` }}
              />{" "}
              <img
                src="/testosterone/3.jpg"
                height={`350px`}
                style={{ display: `flex`, margin: `10px 10px 0px 0px` }}
              />{" "}
              <img
                src="/testosterone/4.jpg"
                height={`350px`}
                style={{ display: `flex`, margin: `10px 10px 0px 0px` }}
              />
            </div>
            <div style={{ margin: `auto` }}>
              <MathJaxContext>
                <MathJax style={{ fontSize: `24px` }} className={styles.font}>
                  {
                    "\\begin{equation} x = -b_1 * x, y = g_1 * x - b_2 * y, z = -b_3 * z + g_2 * y, x(t^+_k) = x (t^-_k) + F(z(t_k)),\\end{equation}"
                  }
                  {
                    "\\begin{equation}t_{k+1}=t_k + Ф(z(t_k)), Ф(z)=k_1 + k_2\\dfrac{(z/h)^P}{1 + (z/h)^P}, F(z) = k_3 + \\dfrac{k_4}{1 + (z/h)^P}.\\end{equation}"
                  }
                </MathJax>
              </MathJaxContext>
            </div>
            <div style={{ display: `flex`, flexDirection: `column` }}>
              <div>
                <span style={{ fontWeight: `bold` }}>
                  Here x = GnRH, y = LH, z = Te - hormone concentration GnRH LH
                  and Te; b1,b2,b3,k1,k2,k3,k4,g1,g2,h and p - parameters.
                </span>
              </div>
              <div style={{ display: `flex`, gap: `20px` }}>
                <figure>
                  <img
                    src="/testosterone/5.jpg"
                    alt="img"
                    height={`300px`}
                    style={{ margin: `15px` }}
                  />
                  <img
                    src="/testosterone/6.jpg"
                    alt="img"
                    height={`300px`}
                    style={{ margin: `15px` }}
                  />
                  <img
                    src="/testosterone/7.jpg"
                    alt="img"
                    height={`300px`}
                    style={{ margin: `15px` }}
                  />
                  <img
                    src="/testosterone/8.jpg"
                    alt="img"
                    height={`300px`}
                    style={{ margin: `15px` }}
                  />
                  <figcaption>
                    Transition to chaos through the classical cascade of
                    bifurcations period doubling
                  </figcaption>
                </figure>
              </div>
            </div>
          </Template>
          <Template title="4.2 Pulse model of testosterone regulation with delay">
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                gap: `40px`,
                margin: `auto`,
              }}
            >
              <div>
                <img src="/testosterone/9.jpg" height={`600px`} />
              </div>
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  gap: `40px`,
                }}
              >
                <img src="/testosterone/10.jpg" height={`300px`} />
                <img src="/testosterone/12.jpg" height={`300px`} />
              </div>
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  gap: `40px`,
                }}
              >
                <img src="/testosterone/11.jpg" height={`300px`} />
                <img src="/testosterone/13.jpg" height={`300px`} />
              </div>
            </div>
            <div style={{ margin: `auto` }}>
              <MathJaxContext>
                <MathJax style={{ fontSize: `24px` }} className={styles.font}>
                  {
                    "\\begin{equation} x = -b_1 * x, y = g_1 * x - b_2 * y, z = -b_3 * z + g_2 * y(t - \\tau),\\end{equation}"
                  }
                  {
                    "\\begin{equation} x(t^+_k) = x (t^-_k) + F(z(t_k)), t_{k+1}=t_k + Ф(z(t_k)),\\end{equation}"
                  }
                  {
                    "\\begin{equation} Ф(z)=k_1 + k_2\\dfrac{(z/h)^P}{1 + (z/h)^P}, F(z) = k_3 + \\dfrac{k_4}{1 + (z/h)^P}.\\end{equation}"
                  }
                </MathJax>
              </MathJaxContext>
            </div>
          </Template>
          <Template title="4.3 Impulse model with local feedback">
            <div>
              <div
                style={{
                  display: `flex`,
                  flexDirection: `row`,
                  margin: `auto`,
                  gap: `80px`,
                }}
              >
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `10px`,
                  }}
                >
                  <figure>
                    <img src="/testosterone/14.jpg" height={`600px`} />
                    <img src="/testosterone/15.jpg" height={`400px`} />
                    <figcaption>
                      Diagram of the endocrine axis of the
                      hypothalamus-pituitary gland. 1 - Function Hill h(z),
                      describing internal feedback, 2 - piecewise linear
                      approximation h(z)
                    </figcaption>
                  </figure>
                </div>
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    gap: `10px`,
                  }}
                >
                  <figure>
                    <div
                      style={{
                        display: `flex`,
                        flexDirection: `row`,
                        gap: `10px`,
                      }}
                    >
                      <img src="/testosterone/16.jpg" height={`500px`} />
                      <img src="/testosterone/17.jpg" height={`500px`} />
                    </div>
                    <div
                      style={{
                        display: `flex`,
                        flexDirection: `row`,
                        gap: `10px`,
                      }}
                    >
                      <img src="/testosterone/18.jpg" height={`500px`} />
                      <img src="/testosterone/19.jpg" height={`500px`} />
                      <img src="/testosterone/20.jpg" height={`500px`} />
                    </div>
                    <figcaption>
                      Multistability and crises of chaotic attractors (merging
                      или merging crisis, expansion или interior crisis, final
                      или boundary crisis bifurcations)
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div style={{ margin: `auto` }}>
                <MathJaxContext>
                  <MathJax style={{ fontSize: `24px` }} className={styles.font}>
                    {
                      "\\begin{equation} x = -b_1 * x, y = g_1 * x - b_2 * y + h(z), z = g_2 * y - b_3 * z, x(t^+_k) + F(z(t_k)),\\end{equation}"
                    }
                    {
                      "\\begin{equation} t_{k+1} = t_k + Ф(z(t_k)),Ф(z)=k_1 + k_2\\dfrac{(z/h)^P}{1 + (z/h)^P}, F(z) = k_3 + \\dfrac{k4}{1 + (z/h)^P},\\end{equation}"
                    }
                    {
                      "\\begin{equation} h(z) = b + \\dfrac{a}{1 + k * (z/r)^s}, b \\geq 0, s > 0, r > 0, a > 0, k > 0.\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
              </div>
            </div>
          </Template>
          <Template
            title="
Key research publications"
          >
            <ul style={{ color: `black` }}>
              <li>
                1. Zh.T. Zhusubaliyev, A.N. Churilov, A. Medvedev, Bifurcation
                Phenomena in an Impulsive Model of Non-Basal Testosterone
                Regulation// Chaos, 22(1), 013121, 2012 (Impact Factor 2.643,
                квартиль Q1).
              </li>
              <li>
                2. Zh. T. Zhusubaliyev, E. Mosekilde, A.N. Churilov, A.
                Medvedev, Multistability and Hidden Attractors in an Impulsive
                Goodwin Oscillator with Time Delay//The European Physical
                Journal. Special Topics. 224(8), 1519-1539, 2015 (Impact Factor
                1.660, квартиль Q2).
              </li>
              <li>
                3. A.N. Churilov, A. Medvedev, Zh. T. Zhusubaliyev, Impulsive
                Goodwin Oscillator with Large Delay: Periodic Oscillations,
                Bistability, and Attractors//Nonlinear Analysis: Hybrid Systems,
                21, 171-183, 2016 (Impact Factor 5.881, квартиль Q1).
              </li>
              <li>
                4. A. N. Churilov, A. Medvedev, Zh. T. Zhusubaliyev,
                Discrete-Time Mapping for an Impulsive Goodwin Oscillator with
                Three Delays//International Journal of Bifurcation and Chaos,
                27(12), 1750182 (17 pages), 2017 (Impact Factor 2.469, квартиль
                Q1).
              </li>
              <li>
                5. A. Medvedev, P. Mattsson, Zh. T. Zhusubaliyev, V. Avrutin,
                Nonlinear Dynamics and Entrainment in a Continuously Forced
                Pulse-Modulated Model of Testosterone Regulation//Nonlinear
                Dynamics, 94, 1165-1181, 2018 (Impact Factor 5.03, квартиль Q1).
              </li>
              <li>
                6. A. Medvedev, A. V. Proskurnikov, Zh. T. Zhusubaliyev,
                Mathematical modeling of endocrine regulation subject to
                circadian rhythm//Annual Reviews in Control, 46, 148-164, 2018
                (Impact Factor 4.987, квартиль Q1).
              </li>
              <li>
                7. Yamalova D., Medvedev A., Zhusubaliyev Zh.T., Bifurcation
                analysis for non-local design of a hybrid observer for the
                impulsive Goodwin's oscillator//Nonlinear Dynamics, 100,
                1401-1419, 2020 (Impact Factor 5.03, квартиль Q1).
              </li>
              <li>
                8. Zh. T. Zhusubaliyev, A.N. Churilov and A. Medvedev, Complex
                Dynamic Phenomena in a Low-Order Model of Non-Basal Testosterone
                Regulation// 50th IEEE Conference on Decision and Control and
                European Control Conference (CDC-ECC) Orlando, Florida, USA,
                December 12-15, 879-884 (2011).
              </li>
              <li>
                9. Zh.T. Zhusubaliyev, A.N. Churilov, A. Medvedev, Complex
                Dynamics and Chaos in a Scalar Linear Continuous System with
                Impulsive Feedback// Proc. of the 2012 American Control
                Conference, Montreal, Canada, 27-29 June, 2419-2424 (2012).
              </li>
              <li>
                10. A.N. Churilov, A. Medvedev , Zh.T. Zhusubaliyev, State
                Observer for a First-order Plant Under Intrinsic Pulse-modulated
                Feedback: a Case Study// Proc. European Control Conference
                (ECC13), Zurich, Switzerland, July 17-19, 2122-2127, 2013.
              </li>
              <li>
                11. A.N. Churilov, A. Medvedev , Zh.T. Zhusubaliyev, Periodic
                Modes and Bistability in an Impulsive Goodwin Oscillator with
                Large Delay// Proceedings of the 19th IFAC World Congress, Cape
                Town, South Africa, August 24-29 2014, Vol. 19, Part 1,
                3340-3345.
              </li>
              <li>
                12. A. Churilov, A. Medvedev, Zh. T. Zhusubaliyev, Delay-Induced
                Dynamical Phenomena in Impulsive Goodwin's Oscillator: What We
                Know So Far, Invited Session: Biological Oscillators// 54th IEEE
                Conference on Decision and Control, Osaka, Japan, December
                15-18, 2015.
              </li>
              <li>
                13. P. Mattsson, A. Medvedev, Zh. T. Zhusubaliyev,
                Pulse-modulated Model of Testosterone Regulation Subject to
                Exogenous Signals// 55th IEEE Conference on Decision and
                Control, December 12-14, 2016, Las Vegas, NV, USA.
              </li>
              <li>
                14. A. Medvedev, A. V. Proskurnikov, Zh. T. Zhusubaliyev,
                Entrainment in Harmonically Forced Continuous and Impulsive
                Goodwin's Oscillators: A Comparison Study// Proceedings of the
                European Control Conference (ECC 2018), June 12-15, 2018.
                Limassol, Cyprus, 2018, (2046 — 2051).
              </li>
              <li>
                15. Yamalova D., A. Medvedev, Zh. T. Zhusubaliyev, A. V.
                Proskurnikov, Nonlinear dynamics of a positive hybrid observer
                for the impulsive Goodwin's oscillator: a design study//
                Proceedings of the 2019 IEEE 58th Conference on Decision and
                Control (CDC 2019), 11-13 Dec. 2019. Nice, France, France, 2019,
                (2046 — 2051).
              </li>
            </ul>
          </Template>
        </div>
      )}
    </div>
  );
};
