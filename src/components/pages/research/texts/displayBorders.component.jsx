import { MathJax, MathJaxContext } from "better-react-mathjax";
import React from "react";
import { Template } from "../../../template/template.component";
import styles from "./displayBorders.module.scss";

export const DisplayBorders = () => {
  return (
    <div>
      <Template title="3. Отображения с большим числом границ (borders)">
        <div style={{ width: `100%`, fontWeight: `bold` }}>
          Совместные исследования с Техническим университетом Дании,
          Штуттартским университетом (Германия), университетом Урбино (Италия),
          университетом Rovira i Virgili (Испания).
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              gap: `40px`,
              flexWrap: `wrap`,
            }}
          >
            <div>
              <figcaption style={{ marginTop: `10px` }}>
                Регулярная динамика
              </figcaption>
              <figure style={{ display: `flex`, flexDirection: `column` }}>
                {listImg.map((el) => (
                  <img src={el} width="300px" height={`250px`} />
                ))}
              </figure>
            </div>
            <div>
              <figcaption style={{ marginTop: `10px` }}>
                Хаотические динамика
              </figcaption>
              <figure
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                }}
              >
                {listImgTwo.map((el) => (
                  <img src={el} width="300px" height={`250px`} />
                ))}
              </figure>
            </div>
            <div
              style={{
                flexWrap: `wrap`,
                marginLeft: `auto`,
                marginTop: `30px`,
              }}
            >
              <div className={styles.top}>
                Однофазный инвертор с широтно-импульсным управлением
              </div>
              <div
                style={{
                  backgroundColor: `rgb(255, 210, 40)`,
                  borderRadius: `0px 0px 10px 10px`,
                }}
              >
                <img
                  src="/invert.png"
                  width={`260px`}
                  style={{
                    display: `flex`,
                    margin: `auto`,
                    padding: `10px 0 10px 0`,
                  }}
                />
              </div>

              <div
                style={{
                  backgroundColor: `rgb(255, 210, 40)`,
                  borderRadius: `0px 0px 10px 10px`,
                  textAlign: `center`,
                }}
              >
                <div>Опорная частота F = 50 Гц</div>
                <div>Частота работы ключей: F ≤ 250 кГц</div>
              </div>
            </div>
          </div>
        </div>
      </Template>
      <Template title="Математическая модель инвертора с непрерывным временем">
        {" "}
        <MathJaxContext>
          <div
            style={{
              display: `flex`,

              alignItems: `center`,
              margin: `auto`,
            }}
          >
            <MathJax>
              {"\\begin{equation}\\dfrac{d x}{d t} =\\end{equation}"}
            </MathJax>
            <MathJax style={{ marginTop: `12px` }}>
              {
                "\\begin{cases}\\lambda (x-1), \\quad x(t)\\Bigr|_t=[t] < \\dfrac{q}{Г}cos\\left(\\dfrac{2\\pi[t]}{m}\\right) - \\dfrac{2P}{\\alpha Г}\\left(t-[t]-\\dfrac{1}{2}\\right)\\\\\\lambda (x+1), \\quad x(t)\\Bigr|_t=[t] > \\dfrac{q}{Г}cos\\left(\\dfrac{2\\pi[t]}{m}\\right) - \\dfrac{2P}{\\alpha Г}\\left(t-[t]-\\dfrac{1}{2}\\right) \\end{cases} "
              }
            </MathJax>
          </div>
        </MathJaxContext>
      </Template>
      <div
        style={{
          display: `flex`,
          margin: `auto`,
          padding: `10px 0 10px 0`,
        }}
      >
        <figure style={{ margin: `auto` }}>
          <img src="/displayBorders/8.jpg" width={`260px`} />
          <figcaption
            style={{
              margin: `auto`,
              marginTop: `10px`,
              backgroundColor: `rgb(245, 204, 129)`,
              padding: `12px 20px 12px 20px`,
              borderRadius: `6px`,
              boxShadow: `1px 1px 1px 1px`,
            }}
          >
            <MathJaxContext>
              <MathJax>
                {
                  "\\begin{equation}x = \\dfrac{R i}{E_0}, \\overline{t} = \\dfrac{t}{a}, P = \\dfrac{R}{\\beta E_*}V_0, q = \\dfrac{R}{\\beta E_*}V_m ,\\end{equation}"
                }
                {
                  "\\begin{equation} \\lambda = -\\dfrac{R}{L}a, Г = \\dfrac{E_0}{E_*}.\\end{equation}"
                }
              </MathJax>
            </MathJaxContext>
          </figcaption>
        </figure>
        <figure style={{ margin: `auto` }}>
          <img
            src="/displayBorders/9.jpg"
            width={`260px`}
            style={{ margin: `auto` }}
          />
          <figcaption
            style={{
              margin: `auto`,
              marginTop: `10px`,
              backgroundColor: `rgb(245, 204, 129)`,
              padding: `12px 20px 12px 20px`,
              borderRadius: `6px`,
              boxShadow: `1px 1px 1px 1px`,
            }}
          >
            <MathJaxContext>
              <MathJax>
                {
                  "Кратность частот \\begin{equation} m = \\dfrac{f_{sw}}{f_{ref}}\\end{equation} "
                }
                {
                  "\\begin{equation}50 \\lessapprox m \\lessapprox 5 000.\\end{equation}"
                }
              </MathJax>
            </MathJaxContext>
          </figcaption>
        </figure>
      </div>
      <div
        style={{
          display: `flex`,
          margin: `auto`,
          padding: `10px 0 10px 0`,
        }}
      >
        <div width={`260px`}></div>
      </div>
      <Template title="Основные публикации по результатам исследований">
        <ul style={{ color: `black` }}>
          <li>
            1. V. Avrutin, E. Mosekilde, Zh.T. Zhusubaliyev, L. Gardini, Onset
            of Chaos in a Single-Phase Power Electronic Inverter. Chaos, 25(4),
            043114-1-043114-14, 2015(Impact Factor 2.643, квартиль Q1).
          </li>
          <li>
            2. V. Avrutin, Zh. T. Zhusubaliyev, E. Mosekilde, Border Collisions
            Inside the Stability Domain of a Fixed | Point, Physica D: Nonlinear
            Phenomena, 321-322, 1-15, 2016 (Impact Factor 1.810, квартиль Q1).
          </li>
          <li>
            3. V. Avrutin, Zh. T. Zhusubaliyev, E. Mosekilde, Cascades of
            alternating pitchfork and flip bifurcations in | H-bridge inverters,
            Physica D, 345, 27-39, 2017 (Impact Factor 1.810, квартиль Q1).
          </li>
          <li>
            4. V. Avrutin, Zh. T. Zhusubaliyev, A. Saha, S. Banerjee, 1. Sushko,
            L. Gardini, Dangerous Bifurcations Revisited// International Journal
            of Bifurcation and Chaos, 26(14),1630040-1 — 1630040-24 (24 pages),
            2016 (Impact Factor 2.469, квартиль Q1).
          </li>
          <li>
            5. V. Avrutin, Zh. T. Zhusubaliyev, Nested closed invariant curves,
            International Journal of Bifurcation and Chaos, 29(7), 1930017 (12
            pages), 2019 (Impact Factor 2.469, квартиль Q1).
          </li>
          <li>
            6. Avrutin, Zh.T. Zhusubaliyev, A. El Aroudi, D. Fournier-Prunaret,
            G. Garcia, and E. Mosekilde. Disrupted Bandcount Doubling in an
            AC-DC Boost PFC Circuit Modeled by a Time Varying Map. J. of
            Physics, 692, 2016, 012003.
          </li>
          <li>
            7. V. Avrutin, J.D. Morcillo, Zh. T. Zhusubaliyev, F. Angulo,
            Bubbling in a power electronic inverter: Onset, development and
            detection//Chaos, Solitons and Fractals 104, 135-152, 2017 (Impact
            Factor 3.764, квартиль Q1).
          </li>
          <li>
            8. V. Avrutin, Zh. T. Zhusubaliyev, Suissa, D., El Aroudi, A.
            Non-observable chaos in piecewise smooth systems//Nonlinear
            Dynamics, 99, 2031-2048, 2020 (Impact Factor 5.03, квартиль Q1).
          </li>
          <li>
            {" "}
            9. V. Avrutin, Zh. T. Zhusubaliyev, A. El Aroudi, Non-visible
            transformations of chaotic attractors due to their ultra-low density
            in AC—DC power factor correction converters //Nonlinear Dynamics,
            102, 2905-2924, 2020 (Impact Factor 5.03, квартиль Q1).{" "}
          </li>
          <li>
            10. V. Avrutin, F. Bastian, Zh. T. Zhusubaliyev, A geometric
            approach to bubbling// Physica D, 417, 132808 (24 pages),2021
            (Impact Factor 1.807, квартиль Q1).
          </li>
          <li>
            {" "}
            11. V. Avrutin, Zh. T. Zhusubaliyev, Piecewise-linear map for
            studying border collision phenomena in | DC/AC
            converters//International Journal of Bifurcation and Chaos, Vol.
            30(7), 2030015 (23 pages), 2020 | (Impact Factor 2.469, ksaptunb
            Q1).
          </li>
        </ul>
      </Template>
    </div>
  );
};
const listImg = [
  "/displayBorders/1.jpg",
  "/displayBorders/2.jpg",
  "/displayBorders/3.jpg",
];
const listImgTwo = [
  "/displayBorders/4.jpg",
  "/displayBorders/5.jpg",
  "/displayBorders/6.jpg",
];
