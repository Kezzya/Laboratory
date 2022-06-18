import React, { useContext } from "react";
import { LanguageContext } from "../../../../languageWrapApp";
import { Template } from "../../../template/template.component";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export const NonsmoothSystems = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {language === `RU` ? (
        <div>
          <Template title="2. Глобальная динамика негладких систем">
            <div style={{ display: `flex`, flexWrap: `wrap`, gap: `20px` }}>
              {listImg.map(
                (el) => (
                  <img src={el} width="350px" />
                )
                // console.log(el)
              )}
            </div>
          </Template>
          <Template title="Кризис хаотического аттрактора (expansion bifurcation, interior crisis)">
            <div style={{ display: `flex`, flexWrap: `wrap`, gap: `20px` }}>
              {listImgTwo.map(
                (el) => (
                  <img src={el} width="350px" />
                )
                // console.log(el)
              )}
              <div style={{ fontWeight: `bold` }}>
                Механизмы внезапного изменения размера хаотического аттрактора
                через гомоклиническую бифуркацию (expansion bifurcation crisis).
              </div>
            </div>
          </Template>
          <Template title="Столкновение притягивающей замкнутой инвариантной кривой с границей ее бассейна притяжения">
            <div style={{ display: `flex`, flexWrap: `wrap`, gap: `20px` }}>
              {listImgThree.map(
                (el) => (
                  <img src={el} width="350px" />
                )
                // console.log(el)
              )}
              <div style={{ fontWeight: `bold` }}>
                Трансформации замкнутой инвариантной кривой через
                гомоклинические бифуркации.
              </div>
            </div>
          </Template>
          <Template title="Основные публикации по результатам исследований">
            <ul style={{ color: `black` }}>
              <li>
                1. Zh. T. Zhusubaliyev, E. A. Soukhoterin and E. Mosekilde,
                Border-collision Bifurcations and Chaotic Oscillations in a
                Piecewise-Smooth Dynamical System// International Journal of
                Bifurcation and Chaos, 11(12), 2977-3001, 2001 (Impact Factor
                2.469, квартиль Q1).
              </li>
              <li>
                2. Zh. T. Zhusubaliyev, E. A. Soukhoterin and E. Mosekilde,
                Border-Collision Bifurcations on a | Two-Dimensional
                Torus//Chaos, Solitons and Fractals, 13(9), 1889-1915, 2002
                (Impact Factor 3.764, квартиль Q1). |
              </li>
              <li>
                3. Zh. T. Zhusubaliyev and E. Mosekilde, Torus Birth Bifurcation
                in a DC/DC Converter// IEEE Trans. Circuits and Systems I,
                53(8), 1839-1850, 2006 (Impact Factor 3.318, квартиль Q1).
              </li>
              <li>
                4. Zh. T. Zhusubaliyev and E. Mosekilde, Birth of Bilayered
                Torus and Torus Breakdown in Piecewise-Smooth Dynamical system//
                Physics Letters A, 351, 167-174, 2006 (Impact Factor 2.278,
                квартиль Q1).
              </li>
              <li>
                5. Zh. T. Zhusubaliyev, E. Mosekilde, S. Maity , S. Mohanan and
                S. Banerjee, Border Collision Route to Quasiperiodicity:
                Numerical Investigation and Experimental Confirmation// Chaos.
                An Interdisciplinary Journal of Nonlinear Science, 16, 023122,
                1-11, 2006 (Impact Factor 2.643, квартиль Q1).
              </li>
              <li>
                6. Zh. T. Zhusubaliyev and E. Mosekilde, Direct Transition From
                a Stable Equilibrium to Quasiperiodicity in Non-Smooth Systems//
                Physics Letters A, 372, 2237-2246, 2008 (Impact Factor 2.278,
                квартиль Q1).
              </li>
              <li>
                7. Zh. T. Zhusubaliyev , Mosekilde, S. De and S. Banerjee,
                Transitions From Phase-Locked Dynamics to Chaos in a
                Piecewise-Linear Map// Physical Review E, 77 (2) , 026206, 1-9,
                2008 (Impact Factor 2.296, квартиль Q1).
              </li>
              <li>
                8. Zh.T. Zhusubaliyev, E. Mosekilde, E. Pavlova, Multistability
                and Torus Reconstruction in a DC-DC Converter with Multilevel
                Control// IEEE Trans. on Industrial Informatics, 9. 1936-1946.
                2013 (Impact Factor 9.112, квартиль Q1).
              </li>
              <li>
                9. Zh.T. Zhusubaliyev, E. Mosekilde, A.I. Andriyanov, V.V.
                Shein, Phase Synchronized Quasiperiodicity in Power Electronic
                Inverter Systems// Physica D, 14-24, 2014,(Impact Factor 1.807
                квартиль Q1).
              </li>
              <li>
                10. Zh. T. Zhusubaliyev, V. Avrutin, F. Bastian, Transformations
                of closed invariant curves and closed-invariant-curve-like
                chaotic attractors in piecewise smooth systems//International
                Journal of Bifurcation and Chaos, 31(2), 2130009 (15 pages),
                2021 (Impact Factor 2.469, квартиль Q1)
              </li>
            </ul>
          </Template>
        </div>
      ) : (
        <div>
          <Template title="2. Global Dynamics of Nonsmooth Systems">
            <div style={{ display: `flex`, flexWrap: `wrap`, gap: `20px` }}>
              {listImg.map(
                (el) => (
                  <img src={el} width="350px" />
                )
                // console.log(el)
              )}
            </div>
          </Template>
          <Template title="Crisis of a chaotic attractor (expansion bifurcation, interior crisis)">
            <div style={{ display: `flex`, flexWrap: `wrap`, gap: `20px` }}>
              {listImgTwo.map(
                (el) => (
                  <img src={el} width="350px" />
                )
                // console.log(el)
              )}
              <div style={{ fontWeight: `bold` }}>
                Mechanisms of a sudden change in the size of a chaotic attractor
                via homoclinic bifurcation(expansion bifurcation crisis).
              </div>
            </div>
          </Template>
          <Template title="Collision of an attracting closed invariant curve with the boundary of its basin of attraction">
            <div style={{ display: `flex`, flexWrap: `wrap`, gap: `20px` }}>
              {listImgThree.map(
                (el) => (
                  <img src={el} width="350px" />
                )
                // console.log(el)
              )}
              <div style={{ fontWeight: `bold` }}>
                Transformations of a closed invariant curve through homoclinic
                bifurcations.
              </div>
            </div>
          </Template>
          <Template title="Key research publications">
            <ul style={{ color: `black` }}>
              <li>
                1. Zh. T. Zhusubaliyev, E. A. Soukhoterin and E. Mosekilde,
                Border-collision Bifurcations and Chaotic Oscillations in a
                Piecewise-Smooth Dynamical System// International Journal of
                Bifurcation and Chaos, 11(12), 2977-3001, 2001 (Impact Factor
                2.469, квартиль Q1).
              </li>
              <li>
                2. Zh. T. Zhusubaliyev, E. A. Soukhoterin and E. Mosekilde,
                Border-Collision Bifurcations on a | Two-Dimensional
                Torus//Chaos, Solitons and Fractals, 13(9), 1889-1915, 2002
                (Impact Factor 3.764, квартиль Q1). |
              </li>
              <li>
                3. Zh. T. Zhusubaliyev and E. Mosekilde, Torus Birth Bifurcation
                in a DC/DC Converter// IEEE Trans. Circuits and Systems I,
                53(8), 1839-1850, 2006 (Impact Factor 3.318, квартиль Q1).
              </li>
              <li>
                4. Zh. T. Zhusubaliyev and E. Mosekilde, Birth of Bilayered
                Torus and Torus Breakdown in Piecewise-Smooth Dynamical system//
                Physics Letters A, 351, 167-174, 2006 (Impact Factor 2.278,
                квартиль Q1).
              </li>
              <li>
                5. Zh. T. Zhusubaliyev, E. Mosekilde, S. Maity , S. Mohanan and
                S. Banerjee, Border Collision Route to Quasiperiodicity:
                Numerical Investigation and Experimental Confirmation// Chaos.
                An Interdisciplinary Journal of Nonlinear Science, 16, 023122,
                1-11, 2006 (Impact Factor 2.643, квартиль Q1).
              </li>
              <li>
                6. Zh. T. Zhusubaliyev and E. Mosekilde, Direct Transition From
                a Stable Equilibrium to Quasiperiodicity in Non-Smooth Systems//
                Physics Letters A, 372, 2237-2246, 2008 (Impact Factor 2.278,
                квартиль Q1).
              </li>
              <li>
                7. Zh. T. Zhusubaliyev , Mosekilde, S. De and S. Banerjee,
                Transitions From Phase-Locked Dynamics to Chaos in a
                Piecewise-Linear Map// Physical Review E, 77 (2) , 026206, 1-9,
                2008 (Impact Factor 2.296, квартиль Q1).
              </li>
              <li>
                8. Zh.T. Zhusubaliyev, E. Mosekilde, E. Pavlova, Multistability
                and Torus Reconstruction in a DC-DC Converter with Multilevel
                Control// IEEE Trans. on Industrial Informatics, 9. 1936-1946.
                2013 (Impact Factor 9.112, квартиль Q1).
              </li>
              <li>
                9. Zh.T. Zhusubaliyev, E. Mosekilde, A.I. Andriyanov, V.V.
                Shein, Phase Synchronized Quasiperiodicity in Power Electronic
                Inverter Systems// Physica D, 14-24, 2014,(Impact Factor 1.807
                квартиль Q1).
              </li>
              <li>
                10. Zh. T. Zhusubaliyev, V. Avrutin, F. Bastian, Transformations
                of closed invariant curves and closed-invariant-curve-like
                chaotic attractors in piecewise smooth systems//International
                Journal of Bifurcation and Chaos, 31(2), 2130009 (15 pages),
                2021 (Impact Factor 2.469, квартиль Q1)
              </li>
            </ul>
          </Template>
        </div>
      )}
    </div>
  );
};

const listImg = [
  "/nonsmooth/formula.jpg",
  "/nonsmooth/2.jpg",
  "/nonsmooth/3.jpg",
  "/nonsmooth/4.jpg",
  "/nonsmooth/5.jpg",
  "/nonsmooth/6.jpg",
];
const listImgTwo = [
  "/nonsmooth/7.jpg",
  "/nonsmooth/8.jpg",
  "/nonsmooth/9.jpg",
  "/nonsmooth/10.jpg",
  "/nonsmooth/11.jpg",
  "/nonsmooth/12.jpg",
  "/nonsmooth/13.jpg",
  "/nonsmooth/14.jpg",
  "/nonsmooth/15.jpg",
];
const listImgThree = [
  "/nonsmooth/16.jpg",
  "/nonsmooth/17.jpg",
  "/nonsmooth/18.jpg",
  "/nonsmooth/19.jpg",
  "/nonsmooth/20.jpg",
  "/nonsmooth/21.jpg",
  "/nonsmooth/22.jpg",
  "/nonsmooth/23.jpg",
];
