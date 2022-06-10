import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Template } from "../../../template/template.component";
import styles from "./neuromuscular.module.scss";
import { useContext } from "react";
import { LanguageContext } from "../../../../languageWrapApp";
export const DiscontinuousCircles = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === `RU` ? (
        <div>
          <Template title="5. Разрывные отображения окружности">
            <div style={{ display: `flex`, flexDirection: `column` }}>
              <div style={{ display: `flex`, margin: `auto` }}>
                <figure>
                  <img
                    src="/discontinuousCircles/1.jpg"
                    alt="img"
                    height={`210px`}
                  />
                  <figcaption>
                    Рис.5.1 Вибрационная машина с дебалансными вибровозбудителем
                  </figcaption>
                </figure>
              </div>
              <div>
                В большинстве вибрационных машин и устройств, применяемых на
                практике (добыча и переработка полезных ископаемых, химическая
                промышленность, металлургия, строительство, приборостроение и
                т.д.), колебания — возбуждаются механическими дебалансными
                вибровозбудителями. Такие вибровозбудители представляют собой
                неуравновешенные роторы, приводимые во вращение
                электродвигателями постоянного или переменного тока. Структурная
                схема одной из таких систем изображена на рис. 5.1. На платформе
                1 массой m2, связанной с неподвижным основанием линейным упругим
                элементом жесткости с (пружиной) и демпфирующим элементом с
                коэффициентом вязкого трения д, установлен неуравновешенный
                ротор. Ротор приводится во вращение электродвигателем
                постоянного тока. Масса дебаланса 71 сконцентрирована в точке,
                отстоящей от оси якоря электродвигателя 2 на расстояние г.
                Горизонтальное движение платформы обеспечивается направляющими
                3, например, на подшипниках качения. Уравнения движения этой
                системы имеют вид (Блехман И.И. Вибрационная механика. — М.:
                Физматлит, 1994.):
              </div>
              <MathJaxContext>
                <MathJax className={styles.font}>
                  {
                    "\\begin{equation}(m_1+m_2)\\dfrac{d^2x}{dt^2}+\\mu\\dfrac{dx}{dt} + cx = m_1r\\left[\\dfrac{d^2\\phi}{dt^2}sin\\phi + \\left(\\dfrac{d\\phi}{dt}\\right)^2 cos \\phi\\right],\\end{equation}"
                  }
                  {
                    "\\begin{equation}J\\dfrac{d^2\\phi}{dt^2}-m_1r\\left(\\dfrac{d^2x}{dt^2}sin\\phi-g cos \\phi\\right) = M(i_d), L\\dfrac{di_d}{dt}+ Ri_d + C_w\\dfrac{d\\phi}{dt} = V_0,\\end{equation}"
                  }
                  {
                    "\\begin{equation}M(i_d) = i_d, J = J_d + J_r, J_r = m_1r^2.\\end{equation}"
                  }
                </MathJax>
              </MathJaxContext>
              Здесь ф - угол поворота ротора, отсчитываемый от горизонтального
              направления; х — перемещение платформы; i_d — ток якоря двигателя;
              m1, Jr, r — соответственно масса, момент инерции ротора,
              эксцентриситет; g — ускорение свободного падения; m1 + m2 — масса
              системы; Jd — момент инерции вала двигателя; М(i_d) — момент,
              передаваемый на ротор от электродвигателя; L, R, C_w, С_E -
              параметры двигателя; V_0 — напряжение питания.
            </div>
          </Template>
          <Template title="Управление колебаниями вибрационной машины">
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                margin: `auto`,
              }}
            >
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  gap: `20px`,
                  flexWrap: `wrap`,
                }}
              >
                <div
                  style={{
                    display: `flex`,
                    gap: `20px`,
                    margin: `auto`,
                    flexWrap: `wrap`,
                  }}
                >
                  <img
                    src="/discontinuousCircles/2.jpg"
                    alt="img"
                    height={`350px`}
                  />
                  <img
                    src="/discontinuousCircles/3.jpg"
                    alt="img"
                    height={`350px`}
                  />
                </div>
                <div
                  style={{
                    display: `flex`,
                    gap: `35px`,
                    margin: `auto`,
                    flexWrap: `wrap`,
                  }}
                >
                  <img
                    src="/discontinuousCircles/4.jpg"
                    alt="img"
                    height={`350px`}
                  />
                  <img
                    src="/discontinuousCircles/5.jpg"
                    alt="img"
                    height={`350px`}
                  />
                </div>
              </div>
              <div style={{ fontWeight: `bold` }}>
                Экспериментальная установка вибрационной машины с релейным
                управлением. Здесь 1, 2 - вибрационная машина и система
                управления; 3, 4 — осциллограф и источник питания.
                Функциональная схема системы
              </div>
            </div>
          </Template>
          <Template title="Математическая модель вибрационной машины с релейным автоматическим управлением">
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                margin: `auto`,
              }}
            >
              <div>
                <MathJaxContext>
                  <MathJax
                    className={styles.font}
                    style={{ textAlign: `center` }}
                  >
                    {
                      "\\begin{equation}(m_1 + m_2)\\dfrac{d^2x}{dt^2} + \\mu\\dfrac{dx}{dt} + cx = m_1 r\\left[\\dfrac{d^2\\phi}{dt^2}sin\\phi + \\left(\\dfrac{d\\phi}{dt}\\right)^2 cos \\phi\\right],\\end{equation}"
                    }
                    {
                      "\\begin{equation}J\\dfrac{d^2\\phi}{dt^2} - m_1r\\left(\\dfrac{d^2x}{dt} sin\\phi - g cos \\phi\\right) = M(i_d), L_d\\dfrac{di_d}{dt} + Ri_d + C_w\\dfrac{d\\phi}{dt} = V_0 K_F(\\xi,\\eta),\\end{equation}"
                    }
                    {
                      "\\begin{equation}M(i_d) = C_E * i_d, J = J_d + m_1 r^2, \\xi = V_{ref} - \\beta i_d, L_d = L^*_d + L_F, R_d = R^*_d + R_F. \\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
              </div>
              <div>
                <span style={{ fontWeight: `bold` }}>
                  Выходной сигнал Sw релейного элемента описывается
                  коммутационной функцией:
                </span>

                <MathJaxContext>
                  <MathJax
                    className={styles.font}
                    style={{ textAlign: `center` }}
                  >
                    {
                      "\\begin{equation}K_F(\\xi,\\eta) = \\begin{cases}1,\\quad if(\\xi > +\\chi_0) or ((-\\chi_0 \\leq \\xi \\leq \\xi_0) and (\\eta = 1))\\\\0,\\quad if(\\xi < -\\chi_0) or ((-\\chi_0 \\leq \\xi \\leq \\xi_0) and (\\eta = 0))\\end{cases}\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
                <div>
                  Здесь ξ, χ_0 - входной сигнал и гистерезис релейного элемента;
                  η - предыдущее состояние релейного элемента; V_ref - сигнал
                  задания момента M(i_d) двигателя; β - чувствительность датчика
                  тока якоря; C_E, C_w, - постоянные электрической машины;
                  L^*_d, R^*_d - индуктивность и сопротивление обмотки якоря;
                  L_F, R_F индуктивность и сопротивление сглаживающего фильтра;
                  Если K_F = 1, то силовой ключ S замкнут (силовой транзистор
                  открыт) и если K_F = 0, то ключ S разомкнут (транзистор
                  закрыт).
                </div>
                <div>Параметры двигателя MAXON RE 25:</div>

                <MathJaxContext>
                  <MathJax
                    className={styles.font}
                    style={{ textAlign: `center` }}
                  >
                    {
                      "\\begin{equation}L_d^*= 0.238 * 10^{-3} Гн; R_d = 2.18 Ом; C_w = 0.02353 B*c/ рад; C_E = 23.5 * 10^{-3} H * m/A, J_d = 1.08 * 10^{-6} кг * м^2\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
              </div>
            </div>
          </Template>
          <Template title="Результаты экспериментальных исследований динамических режимов на установке">
            <img
              src="/discontinuousCircles/6.jpg"
              alt="img"
              height={`1050px`}
              style={{ margin: `auto` }}
            />
          </Template>
          <Template title="Сведение 5-мерной модели к динамической системе с двумя масштабами времени">
            <div style={{ fontWeight: `bold` }}>Уравнения движения</div>
            <div style={{ margin: `auto` }}>
              <MathJaxContext>
                <MathJax className={styles.font} style={{ margin: `auto` }}>
                  {
                    "\\begin{equation}L\\dfrac{di_d}{dt} + Ri_d + C_w(t) = V_0 K_F (\\xi,\\eta), w(t) = \\dfrac{d\\phi}{dt} = w_0 + w_m cos(\\Omega t),\\end{equation}"
                  }
                  {
                    "\\begin{equation}w_0 = \\dfrac{V_0 - V_{ref} R_d / \\beta ,}{C_w} w_m = \\dfrac{\\sqrt{1+T^2_d \\Omega^2} R_d}{C^2_w}\\Delta M, T_d = \\dfrac{L_d}{R_d},\\end{equation}"
                  }
                  {
                    "\\begin{equation} \\Delta M = 0.5 C_E(V_{ref} + \\chi_0 - \\beta i^*_d)/\\beta, i^*_d = \\min\\limits_{0\\leq t \\leq T} i_d(t).\\end{equation}"
                  }
                </MathJax>
              </MathJaxContext>
            </div>
          </Template>
          <Template title="Построение разрывного отображения окружности">
            <MathJaxContext>
              <MathJax className={styles.font} style={{ margin: `auto` }}>
                {
                  "\\begin{equation}\\theta _{k+1} = F(\\theta _k) = f^- o f^+ (\\theta _k) = \\theta _k + z^+_k + z^-_k \\  mod \\ 2\\pi \\end{equation}"
                }
                {
                  "\\begin{equation} \\theta_k: \\end{equation} фаза в k-й момент переключения релейного элемента."
                }
                {
                  "\\begin{equation} z^+_k, z^-_k: \\end{equation} коэффициенты заполнения импульсов."
                }
              </MathJax>
            </MathJaxContext>
            <div
              style={{
                display: `flex`,
                gap: `40px`,
                margin: `10px auto 10px auto`,
              }}
            >
              <img
                src="/discontinuousCircles/7.jpg"
                alt="img"
                height={`350px`}
                style={{ margin: `auto` }}
              />
              <img
                src="/discontinuousCircles/8.jpg"
                alt="img"
                height={`350px`}
                style={{ margin: `auto` }}
              />
              <img
                src="/discontinuousCircles/9.jpg"
                alt="img"
                height={`350px`}
                style={{ margin: `auto` }}
              />
              <img
                src="/discontinuousCircles/10.jpg"
                alt="img"
                height={`350px`}
                style={{ margin: `auto` }}
              />
            </div>
          </Template>
          <Template title="Бифуркационная структура">
            <div style={{ display: `flex`, gap: `10px`, flexDirection: `row` }}>
              <img
                src="/discontinuousCircles/11.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/12.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/13.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/14.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/15.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/16.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/17.jpg"
                alt="img"
                height={`350px`}
              />
            </div>
          </Template>
          <Template title="Основные публикации по результатам исследований">
            <ul style={{ color: `black` }}>
              <li>
                1. Zh. T. Zhusubaliyev, V. Avrutin,, V. G. Rubanov, D. A.
                Bushuev, D. V. Titov, and O. O. Yanochkina, Persistence Border
                Collisions in a Vibrating System Excited by an Unbalanced Motor
                With a Relay . Control. 8th Polyakhov’s Reading: Proceedings of
                the International Scientific Conference on Mechanics// |
                American Institute of Physics (AIP) Conference Proceedings,1959,
                2018, (080022-1 — 080022-8). :
              </li>
              <li>
                2. Zh. T. Zhusubaliyev, V. Avrutin, V. G. Rubanov c, D. A.
                Bushuev, Complex dynamics of a vibration machine caused by a
                relay feedback control// Physica D: Nonlinear Phenomena, 420,
                132870 (15 pages),2021. Impact Factor 1.807, ksaptunb Q1
              </li>
              <li>
                3. Zh. T. Zhusubaliyev, V. Avrutin, V. G. Rubanov, D. A.
                Bushuevy, D. V. Titov, and O. O. Yanochkina, Persistence border
                collisions in a vibration system with a relay control// 2018
                International Symposium on | Nonlinear Theory and Its
                Applications, NOLTA2018, Tarragona, Spain, September 2-6, 2018,
                332 — 334.
              </li>
              <li>
                4. Zh. T. Zhusubaliyev, V. Avrutin, Border-collisions in a
                periodically forced self-oscillatory piecewise smooth system
                with a high number of switching manifolds//15th International
                Conference Dynamical Systems — Theory and Applications, DSTA,
                December 2-5, 2019. Lodz, Poland.
              </li>
            </ul>
          </Template>
        </div>
      ) : (
        <div>
          <Template title="5. Discontinuous circle mappings">
            <div style={{ display: `flex`, flexDirection: `column` }}>
              <div style={{ display: `flex`, margin: `auto` }}>
                <figure>
                  <img
                    src="/discontinuousCircles/1.jpg"
                    alt="img"
                    height={`210px`}
                  />
                  <figcaption>
                    Pic.5.1 Vibrating machine with unbalance vibration exciters
                  </figcaption>
                </figure>
              </div>
              <div>
                In most vibration machines and devices used on practice
                (extraction and processing of minerals, chemical industry,
                metallurgy, construction, instrumentation and etc.),
                oscillations - are excited by mechanical unbalance vibration
                exciters. Such vibrators are unbalanced rotors driven into
                rotation electric motors of direct or alternating current.
                Structural a diagram of one of these systems is shown in Fig.
                5.1. On the platform 1 with a mass m2 connected to a fixed base
                by a linear elastic stiffening element with (spring) and damping
                element with coefficient of viscous friction d, an unbalanced
                rotor. The rotor is driven by an electric motor direct current.
                The unbalance mass 71 is concentrated at the point away from the
                anchor axis motor 2 for distance d. Horizontal movement platform
                is provided with guides 3, for example, on rolling bearings. The
                equations of motion of this system have the form (Blekhman I.I.
                Vibration mechanics. - M .: Физматлит, 1994.):
              </div>
              <MathJaxContext>
                <MathJax className={styles.font}>
                  {
                    "\\begin{equation}(m_1+m_2)\\dfrac{d^2x}{dt^2}+\\mu\\dfrac{dx}{dt} + cx = m_1r\\left[\\dfrac{d^2\\phi}{dt^2}sin\\phi + \\left(\\dfrac{d\\phi}{dt}\\right)^2 cos \\phi\\right],\\end{equation}"
                  }
                  {
                    "\\begin{equation}J\\dfrac{d^2\\phi}{dt^2}-m_1r\\left(\\dfrac{d^2x}{dt^2}sin\\phi-g cos \\phi\\right) = M(i_d), L\\dfrac{di_d}{dt}+ Ri_d + C_w\\dfrac{d\\phi}{dt} = V_0,\\end{equation}"
                  }
                  {
                    "\\begin{equation}M(i_d) = i_d, J = J_d + J_r, J_r = m_1r^2.\\end{equation}"
                  }
                </MathJax>
              </MathJaxContext>
              Here ф - angle of rotation of the rotor, counted from the
              horizontal directions; х — platform movement; i_d — armature
              current engine; m1, Jr, r — respectively, the moment of inertia of
              the rotor, the eccentricity; g — acceleration of gravity; m1 + m2
              — system mass; Jd — moment of inertia of the motor shaft; М(i_d) —
              moment transmitted to the rotor from the electric motor; L, R,
              C_w, С_E - engine parameters; V_0 — supply voltage.
            </div>
          </Template>
          <Template title="Vibrating Machine Oscillation Control">
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                margin: `auto`,
              }}
            >
              <div
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  gap: `20px`,
                  flexWrap: `wrap`,
                }}
              >
                <div
                  style={{
                    display: `flex`,
                    gap: `20px`,
                    margin: `auto`,
                    flexWrap: `wrap`,
                  }}
                >
                  <img
                    src="/discontinuousCircles/2.jpg"
                    alt="img"
                    height={`350px`}
                  />
                  <img
                    src="/discontinuousCircles/3.jpg"
                    alt="img"
                    height={`350px`}
                  />
                </div>
                <div
                  style={{
                    display: `flex`,
                    gap: `35px`,
                    margin: `auto`,
                    flexWrap: `wrap`,
                  }}
                >
                  <img
                    src="/discontinuousCircles/4.jpg"
                    alt="img"
                    height={`350px`}
                  />
                  <img
                    src="/discontinuousCircles/5.jpg"
                    alt="img"
                    height={`350px`}
                  />
                </div>
              </div>
              <div style={{ fontWeight: `bold` }}>
                Experimental installation of a vibration machine with a relay
                management. Here 1, 2 - vibrating machine and system management;
                3, 4 — oscilloscope and power supply. Functional diagram of the
                system.
              </div>
            </div>
          </Template>
          <Template title="Mathematical model of a vibration machine with relay automatic control">
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                margin: `auto`,
              }}
            >
              <div>
                <MathJaxContext>
                  <MathJax
                    className={styles.font}
                    style={{ textAlign: `center` }}
                  >
                    {
                      "\\begin{equation}(m_1 + m_2)\\dfrac{d^2x}{dt^2} + \\mu\\dfrac{dx}{dt} + cx = m_1 r\\left[\\dfrac{d^2\\phi}{dt^2}sin\\phi + \\left(\\dfrac{d\\phi}{dt}\\right)^2 cos \\phi\\right],\\end{equation}"
                    }
                    {
                      "\\begin{equation}J\\dfrac{d^2\\phi}{dt^2} - m_1r\\left(\\dfrac{d^2x}{dt} sin\\phi - g cos \\phi\\right) = M(i_d), L_d\\dfrac{di_d}{dt} + Ri_d + C_w\\dfrac{d\\phi}{dt} = V_0 K_F(\\xi,\\eta),\\end{equation}"
                    }
                    {
                      "\\begin{equation}M(i_d) = C_E * i_d, J = J_d + m_1 r^2, \\xi = V_{ref} - \\beta i_d, L_d = L^*_d + L_F, R_d = R^*_d + R_F. \\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
              </div>
              <div>
                <span style={{ fontWeight: `bold` }}>
                  Output signal Sw relay element is described switching
                  function:
                </span>

                <MathJaxContext>
                  <MathJax
                    className={styles.font}
                    style={{ textAlign: `center` }}
                  >
                    {
                      "\\begin{equation}K_F(\\xi,\\eta) = \\begin{cases}1,\\quad if(\\xi > +\\chi_0) or ((-\\chi_0 \\leq \\xi \\leq \\xi_0) and (\\eta = 1))\\\\0,\\quad if(\\xi < -\\chi_0) or ((-\\chi_0 \\leq \\xi \\leq \\xi_0) and (\\eta = 0))\\end{cases}\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
                <div>
                  Here ξ, χ_0 - input signal and hysteresis of the relay
                  element; η - the previous state of the relay element; V_ref -
                  torque reference signal M(i_d) engine; β - sensitivity
                  armature current sensor; C_E, C_w, - permanent electrical
                  cars; L^*_d, R^*_d - winding inductance and resistance
                  anchors; L_F, R_F smoothing inductance and resistance filter;
                  If K_F = 1, then power switch S is closed ( power transistor
                  open) and if K_F = 0, then switch S open ( transistor closed).
                </div>
                <div>Engine parameters MAXON RE 25:</div>

                <MathJaxContext>
                  <MathJax
                    className={styles.font}
                    style={{ textAlign: `center` }}
                  >
                    {
                      "\\begin{equation}L_d^*= 0.238 * 10^{-3} Гн; R_d = 2.18 Ом; C_w = 0.02353 B*c/ рад; C_E = 23.5 * 10^{-3} H * m/A, J_d = 1.08 * 10^{-6} кг * м^2\\end{equation}"
                    }
                  </MathJax>
                </MathJaxContext>
              </div>
            </div>
          </Template>
          <Template
            title="
Results of experimental studies of dynamic regimes at the facility"
          >
            <img
              src="/discontinuousCircles/6.jpg"
              alt="img"
              height={`1050px`}
              style={{ margin: `auto` }}
            />
          </Template>
          <Template title="Reduction of a 5-dimensional model to a dynamic system with two time scales">
            <div style={{ fontWeight: `bold` }}>Equations of motion</div>
            <div style={{ margin: `auto` }}>
              <MathJaxContext>
                <MathJax className={styles.font} style={{ margin: `auto` }}>
                  {
                    "\\begin{equation}L\\dfrac{di_d}{dt} + Ri_d + C_w(t) = V_0 K_F (\\xi,\\eta), w(t) = \\dfrac{d\\phi}{dt} = w_0 + w_m cos(\\Omega t),\\end{equation}"
                  }
                  {
                    "\\begin{equation}w_0 = \\dfrac{V_0 - V_{ref} R_d / \\beta ,}{C_w} w_m = \\dfrac{\\sqrt{1+T^2_d \\Omega^2} R_d}{C^2_w}\\Delta M, T_d = \\dfrac{L_d}{R_d},\\end{equation}"
                  }
                  {
                    "\\begin{equation} \\Delta M = 0.5 C_E(V_{ref} + \\chi_0 - \\beta i^*_d)/\\beta, i^*_d = \\min\\limits_{0\\leq t \\leq T} i_d(t).\\end{equation}"
                  }
                </MathJax>
              </MathJaxContext>
            </div>
          </Template>
          <Template title="Construction of a discontinuous display of a circle">
            <MathJaxContext>
              <MathJax className={styles.font} style={{ margin: `auto` }}>
                {
                  "\\begin{equation}\\theta _{k+1} = F(\\theta _k) = f^- o f^+ (\\theta _k) = \\theta _k + z^+_k + z^-_k \\  mod \\ 2\\pi \\end{equation}"
                }
                {
                  "\\begin{equation} \\theta_k: \\end{equation} phase at the k-th moment of switching of the relay element."
                }
                {
                  "\\begin{equation} z^+_k, z^-_k: \\end{equation} pulse duty cycles."
                }
              </MathJax>
            </MathJaxContext>
            <div
              style={{
                display: `flex`,
                gap: `40px`,
                margin: `10px auto 10px auto`,
              }}
            >
              <img
                src="/discontinuousCircles/7.jpg"
                alt="img"
                height={`350px`}
                style={{ margin: `auto` }}
              />
              <img
                src="/discontinuousCircles/8.jpg"
                alt="img"
                height={`350px`}
                style={{ margin: `auto` }}
              />
              <img
                src="/discontinuousCircles/9.jpg"
                alt="img"
                height={`350px`}
                style={{ margin: `auto` }}
              />
              <img
                src="/discontinuousCircles/10.jpg"
                alt="img"
                height={`350px`}
                style={{ margin: `auto` }}
              />
            </div>
          </Template>
          <Template
            title="
Bifurcation structure"
          >
            <div style={{ display: `flex`, gap: `10px`, flexDirection: `row` }}>
              <img
                src="/discontinuousCircles/11.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/12.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/13.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/14.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/15.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/16.jpg"
                alt="img"
                height={`350px`}
              />
              <img
                src="/discontinuousCircles/17.jpg"
                alt="img"
                height={`350px`}
              />
            </div>
          </Template>
          <Template title="Key research publications">
            <ul style={{ color: `black` }}>
              <li>
                1. Zh. T. Zhusubaliyev, V. Avrutin,, V. G. Rubanov, D. A.
                Bushuev, D. V. Titov, and O. O. Yanochkina, Persistence Border
                Collisions in a Vibrating System Excited by an Unbalanced Motor
                With a Relay . Control. 8th Polyakhov’s Reading: Proceedings of
                the International Scientific Conference on Mechanics// |
                American Institute of Physics (AIP) Conference Proceedings,1959,
                2018, (080022-1 — 080022-8). :
              </li>
              <li>
                2. Zh. T. Zhusubaliyev, V. Avrutin, V. G. Rubanov c, D. A.
                Bushuev, Complex dynamics of a vibration machine caused by a
                relay feedback control// Physica D: Nonlinear Phenomena, 420,
                132870 (15 pages),2021. Impact Factor 1.807, ksaptunb Q1
              </li>
              <li>
                3. Zh. T. Zhusubaliyev, V. Avrutin, V. G. Rubanov, D. A.
                Bushuevy, D. V. Titov, and O. O. Yanochkina, Persistence border
                collisions in a vibration system with a relay control// 2018
                International Symposium on | Nonlinear Theory and Its
                Applications, NOLTA2018, Tarragona, Spain, September 2-6, 2018,
                332 — 334.
              </li>
              <li>
                4. Zh. T. Zhusubaliyev, V. Avrutin, Border-collisions in a
                periodically forced self-oscillatory piecewise smooth system
                with a high number of switching manifolds//15th International
                Conference Dynamical Systems — Theory and Applications, DSTA,
                December 2-5, 2019. Lodz, Poland.
              </li>
            </ul>
          </Template>
        </div>
      )}
    </div>
  );
};
