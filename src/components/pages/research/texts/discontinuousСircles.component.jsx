import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Template } from "../../../template/template.component";
import styles from "./neuromuscular.module.scss";
export const DiscontinuousCircles = () => {
  return (
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
            промышленность, металлургия, строительство, приборостроение и т.д.),
            колебания — возбуждаются механическими дебалансными
            вибровозбудителями. Такие вибровозбудители представляют собой
            неуравновешенные роторы, приводимые во вращение электродвигателями
            постоянного или переменного тока. Структурная схема одной из таких
            систем изображена на рис. 5.1. На платформе 1 массой m2, связанной с
            неподвижным основанием линейным упругим элементом жесткости с
            (пружиной) и демпфирующим элементом с коэффициентом вязкого трения
            д, установлен неуравновешенный ротор. Ротор приводится во вращение
            электродвигателем постоянного тока. Масса дебаланса 71
            сконцентрирована в точке, отстоящей от оси якоря электродвигателя 2
            на расстояние г. Горизонтальное движение платформы обеспечивается
            направляющими 3, например, на подшипниках качения. Уравнения
            движения этой системы имеют вид (Блехман И.И. Вибрационная механика.
            — М.: Физматлит, 1994.):
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
          направления; х — перемещение платформы; i_d — ток якоря двигателя; m1,
          Jr, r — соответственно масса, момент инерции ротора, эксцентриситет; g
          — ускорение свободного падения; m1 + m2 — масса системы; Jd — момент
          инерции вала двигателя; М(i_d) — момент, передаваемый на ротор от
          электродвигателя; L, R, C_w, С_E - параметры двигателя; V_0 —
          напряжение питания.
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
            управлением. Здесь 1, 2 - вибрационная машина и система управления;
            3, 4 — осциллограф и источник питания. Функциональная схема системы
          </div>
        </div>
      </Template>
      <Template title="Математическая модель вибрационной машины с релейным автоматическим управлением">
        <div
          style={{ display: `flex`, flexDirection: `column`, margin: `auto` }}
        >
          <div>
            <MathJaxContext>
              <MathJax className={styles.font} style={{ textAlign: `center` }}>
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
              Выходной сигнал Sw релейного элемента описывается коммутационной
              функцией:
            </span>

            <MathJaxContext>
              <MathJax className={styles.font} style={{ textAlign: `center` }}>
                {
                  "\\begin{equation}K_F(\\xi,\\eta) = \\begin{cases}1,\\quad if(\\xi > +\\chi_0) or ((-\\chi_0 \\leq \\xi \\leq \\xi_0) and (\\eta = 1))\\\\0,\\quad if(\\xi < -\\chi_0) or ((-\\chi_0 \\leq \\xi \\leq \\xi_0) and (\\eta = 0))\\end{cases}\\end{equation}"
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
      <Template title="Основные публикации по результатам исследований">
        <ul style={{ color: `black` }}>
          <li>
            1. Zh. T. Zhusubaliyev, V. Avrutin,, V. G. Rubanov, D. A. Bushuev,
            D. V. Titov, and O. O. Yanochkina, Persistence Border Collisions in
            a Vibrating System Excited by an Unbalanced Motor With a Relay .
            Control. 8th Polyakhov’s Reading: Proceedings of the International
            Scientific Conference on Mechanics// | American Institute of Physics
            (AIP) Conference Proceedings,1959, 2018, (080022-1 — 080022-8). :
          </li>
          <li>
            2. Zh. T. Zhusubaliyev, V. Avrutin, V. G. Rubanov c, D. A. Bushuev,
            Complex dynamics of a vibration machine caused by a relay feedback
            control// Physica D: Nonlinear Phenomena, 420, 132870 (15
            pages),2021. Impact Factor 1.807, ksaptunb Q1
          </li>
          <li>
            3. Zh. T. Zhusubaliyev, V. Avrutin, V. G. Rubanov, D. A. Bushuevy,
            D. V. Titov, and O. O. Yanochkina, Persistence border collisions in
            a vibration system with a relay control// 2018 International
            Symposium on | Nonlinear Theory and Its Applications, NOLTA2018,
            Tarragona, Spain, September 2-6, 2018, 332 — 334.
          </li>
          <li>
            4. Zh. T. Zhusubaliyev, V. Avrutin, Border-collisions in a
            periodically forced self-oscillatory piecewise smooth system with a
            high number of switching manifolds//15th International Conference
            Dynamical Systems — Theory and Applications, DSTA, December 2-5,
            2019. Lodz, Poland.
          </li>
        </ul>
      </Template>
    </div>
  );
};
