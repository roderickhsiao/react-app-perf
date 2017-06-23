import React, { Component } from 'react';

import ColorBlock from '../components/ColorBlock';
import PageCanvas from '../components/PageCanvas';
import Section from '../components/Section';

class StackingContext extends Component {
  render() {
    return (
      <PageCanvas
        title="Stacking Context"
        section={
          <Section
            title={
              <div>
                z-index and{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context">
                  stacking context
                </a>
              </div>
            }
            content={[
              <div className="Fz(1.1rem) Ff(ss)">
                <p>A stacking context is formed, anywhere in the document, by any element in the following scenarios:</p>
                <ul>
                  <li>Root element of document (HTML).</li>
                  <li>
                    Element with a{' '}
                    <a
                      title="The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects."
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/position"
                    >
                      <code>position</code>
                    </a>{' '}
                    value "absolute"&nbsp;or "relative" and&nbsp;<a
                      title="The z-index property specifies the z-order of a positioned element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one."
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
                    >
                      <code>z-index</code>
                    </a>{' '}
                    value&nbsp;other than "auto".
                  </li>
                  <li>
                    Element&nbsp;with a{' '}
                    <a
                      title="The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects."
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/position"
                    >
                      <code>position</code>
                    </a>{' '}
                    value&nbsp;"fixed" or "sticky" (sticky for all mobile
                    browsers, but not&nbsp;older desktop).
                  </li>
                  <li>
                    Element that is a child of a&nbsp;flex (<a
                      title="REDIRECT /en-US/docs/CSS/Using_CSS_flexible_boxes"
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/flexbox"
                    >
                      <code>flexbox</code>
                    </a>) container, with{' '}
                    <a
                      title="The z-index property specifies the z-order of a positioned element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one."
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
                    >
                      <code>z-index</code>
                    </a>{' '}
                    value other than "auto".
                  </li>
                  <li>
                    Element&nbsp;with a{' '}
                    <a
                      title="The opacity CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid."
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"
                    >
                      <code>opacity</code>
                    </a>{' '}
                    value less than 1&nbsp;(See{' '}
                    <a
                      title="http://www.w3.org/TR/css3-color/#transparency"
                      href="http://www.w3.org/TR/css3-color/#transparency"
                    >
                      the specification for opacity
                    </a>).
                  </li>
                  <li>
                    Element with a{' '}
                    <a
                      title="The mix-blend-mode CSS property describes how an element's content should blend with the content of the element's direct parent and the element's background."
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode"
                    >
                      <code>mix-blend-mode</code>
                    </a>{' '}
                    value other than "normal".
                  </li>
                  <li>
                    Element with any of the following properties with value
                    other than "none":
                    <ul>
                      <li>
                        <a
                          title="The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed."
                          href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
                        >
                          <code>transform</code>
                        </a>
                      </li>
                      <li>
                        <a
                          title="The filter property provides graphical effects like blurring, sharpening, or color shifting an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders."
                          href="/en-US/docs/Web/CSS/filter"
                        >
                          <code>filter</code>
                        </a>
                      </li>
                      <li>
                        <a
                          title="The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property."
                          href="https://developer.mozilla.org/en-US/docs/Web/CSS/perspective"
                        >
                          <code>perspective</code>
                        </a>
                      </li>
                      <li>
                        <a
                          title="The clip-path CSS property prevents a portion of an element from getting displayed by defining a clipping region&nbsp;to be displayed i.e,&nbsp;only a specific region of the element is displayed. The clipping region is a path specified as a URL referencing an inline or external SVG, or shape method such as&nbsp;circle(). The clip-path property replaces the now deprecated clip property."
                          href="https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path"
                        >
                          <code>clip-path</code>
                        </a>
                      </li>
                      <li>
                        <a
                          title="The mask property in CSS allows users to alter the visibility of an item by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points."
                          href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
                        >
                          <code>mask</code>
                        </a>{' '}
                        /&nbsp;<a
                          title="The mask-image CSS property sets the image that is used as mask layer for an element."
                          href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image"
                        >
                          <code>mask-image</code>
                        </a>{' '}
                        /&nbsp;<a
                          title="The documentation about this has not yet been written; please consider contributing!"
                          href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border"
                        >
                          <code>mask-border</code>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Element with a{' '}
                    <a
                      title="The isolation CSS property defines if the element must create a new stacking context."
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/isolation"
                    >
                      <code>isolation</code>
                    </a>{' '}
                    value "isolate".
                  </li>
                  <li>
                    Element with a{' '}
                    <a
                      title="The -webkit-overflow-scrolling CSS property controls whether or not touch devices use momentum-based scrolling for the given element."
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling"
                    >
                      <code>-webkit-overflow-scrolling</code>
                    </a>{' '}
                    value "touch".
                  </li>
                  <li>
                    Element with a{' '}
                    <a
                      title="The will-change CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed."
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS/will-change"
                    >
                      <code>will-change</code>
                    </a>{' '}
                    value specifying any property that would&nbsp;create&nbsp;a
                    stacking context on non-initial value&nbsp;(see{' '}
                    <a href="http://dev.opera.com/articles/css-will-change-property/">
                      this post
                    </a>).
                  </li>
                </ul>
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>Natural Flow</h2>
                <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2.4rem) Bgc(#2196f3):h Trsdu(.3s)">
                  Block A
                </ColorBlock>
                <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2.4rem) Bgc(#673ab7):h Trsdu(.3s)">
                  Block B
                </ColorBlock>
                <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2.4rem) Bgc(#009688):h Trsdu(.3s)">
                  Block C
                </ColorBlock>
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>Overlay - absolute position</h2>
                <div className="Pos(r)">
                  <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2.4rem) Pos(a) Bgc(#2196f3):h Trsdu(.3s)">
                    Block A
                  </ColorBlock>
                  <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2.4rem) Pos(a) T(200px) Start(25%) Bgc(#673ab7):h Trsdu(.3s)">
                    Block B
                  </ColorBlock>
                  <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2.4rem) Pos(a) T(400px) Start(50%) Bgc(#009688):h Trsdu(.3s)">
                    Block C
                  </ColorBlock>
                </div>
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>Overlay - absolute position with child instance</h2>
                <div className="Pos(r)">
                  <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) Bgc(#2196f3):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child A
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) T(200px) Start(25%) Bgc(#673ab7):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child B
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2rem) Pos(a) T(400px) Start(50%) Bgc(#009688):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child C
                    </ColorBlock>
                  </ColorBlock>
                </div>
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>
                  Overlay - absolute position with multiple child instance
                </h2>
                <div className="Pos(r)">
                  <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) Bgc(#2196f3):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child A
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) T(200px) Start(25%) Bgc(#673ab7):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12) Pos(r)"
                    >
                      <ColorBlock
                        width="W(100px)"
                        height="H(75px)"
                        className="Bd Bdc(#fff.36) Bgc(#000.5) Pos(a) B(0) Start(25%) Fz(.9rem)"
                      >
                        Child B - 1 - 1
                      </ColorBlock>
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2rem) Pos(a) T(400px) Start(50%) Bgc(#009688):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child C
                    </ColorBlock>
                  </ColorBlock>
                </div>
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>
                  Overlay - absolute position with multiple child instance and
                  z-index (add z-index to B)
                </h2>
                <div className="Pos(r)">
                  <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) Bgc(#2196f3):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child A
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) T(200px) Start(25%) Bgc(#673ab7):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12) Pos(r)"
                    >
                      <ColorBlock
                        width="W(100px)"
                        height="H(75px)"
                        className="Bd Bdc(#fff.36) Bgc(#000.5) Pos(a) B(0) Start(25%) Fz(.9rem) Z(10)"
                      >
                        Child B - 1 - 1
                      </ColorBlock>
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2rem) Pos(a) T(400px) Start(50%) Bgc(#009688):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child C
                    </ColorBlock>
                  </ColorBlock>
                </div>
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>
                  Overlay - absolute position with multiple child instance and
                  z-index (add z-index to C)
                </h2>
                <div className="Pos(r)">
                  <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) Bgc(#2196f3):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child A
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) T(200px) Start(25%) Bgc(#673ab7):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12) Pos(r)"
                    >
                      <ColorBlock
                        width="W(100px)"
                        height="H(75px)"
                        className="Bd Bdc(#fff.36) Bgc(#000.5) Pos(a) B(0) Start(25%) Fz(.9rem) Z(10)"
                      >
                        Child B - 1 - 1
                      </ColorBlock>
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2rem) Pos(a) T(400px) Start(50%) Bgc(#009688):h Trsdu(.3s) Z(11)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child C
                    </ColorBlock>
                  </ColorBlock>
                </div>
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>
                  Modal without z-index
                </h2>
                <div className="Pos(r)">
                  <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) Bgc(#2196f3):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child A
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) T(200px) Start(25%) Bgc(#673ab7):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12) Pos(r)"
                    >
                      <ColorBlock
                        width="W(100px)"
                        height="H(75px)"
                        className="Bd Bdc(#fff.36) Bgc(#000.5) Pos(a) B(0) Start(25%) Fz(.9rem) Z(10)"
                      >
                        Child B - 1 - 1
                      </ColorBlock>
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2rem) Pos(a) T(400px) Start(50%) Bgc(#009688):h Trsdu(.3s) Z(11)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child C
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="V(h)" />
                  <ColorBlock className="V(h)" />
                  <ColorBlock className="V(h)" />
                  <div className="StretchedBox D(f) Ai(c) Jc(c) C(#fff) Bgc(#000.83) Bgc(#000):h Trsdu(.3s) Fz(3rem) Fs(i) Tt(u)">
                    Modal
                  </div>
                </div>
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>
                  Modal (z-index 12)
                </h2>
                <div className="Pos(r)">
                  <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) Bgc(#2196f3):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child A
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) T(200px) Start(25%) Bgc(#673ab7):h Trsdu(.3s)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12) Pos(r)"
                    >
                      <ColorBlock
                        width="W(100px)"
                        height="H(75px)"
                        className="Bd Bdc(#fff.36) Bgc(#000.5) Pos(a) B(0) Start(25%) Fz(.9rem) Z(10)"
                      >
                        Child B - 1 - 1
                      </ColorBlock>
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2rem) Pos(a) T(400px) Start(50%) Bgc(#009688):h Trsdu(.3s) Z(11)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child C
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="V(h)" />
                  <ColorBlock className="V(h)" />
                  <ColorBlock className="V(h)" />
                  <div className="StretchedBox D(f) Ai(c) Jc(c) C(#fff) Bgc(#000.83) Bgc(#000):h Trsdu(.3s) Fz(3rem) Fs(i) Tt(u) Z(12)">
                    Modal
                  </div>
                </div>
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>
                  Overlay - absolute position with multiple child instance and
                  z-index (add z-index to B) - with stacking context
                </h2>
                <div className="Pos(r)">
                  <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) Bgc(#2196f3):h Trsdu(.3s) Z(1)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child A
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) T(200px) Start(25%) Bgc(#673ab7):h Trsdu(.3s) Z(1)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12) Pos(r)"
                    >
                      <ColorBlock
                        width="W(100px)"
                        height="H(75px)"
                        className="Bd Bdc(#fff.36) Bgc(#000.5) Pos(a) B(0) Start(25%) Fz(.9rem) Z(1)"
                      >
                        Child B - 1 - 1
                      </ColorBlock>
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2rem) Pos(a) T(400px) Start(50%) Bgc(#009688):h Trsdu(.3s) Z(1)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child C
                    </ColorBlock>
                  </ColorBlock>
                </div>
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
                <ColorBlock className="V(h)" />
              </div>,
              <div className="BdB Bdbc(#000.12) P(10px)">
                <h2>
                  Modal with correct z-index
                </h2>
                <div className="Pos(r)">
                  <ColorBlock className="Bgc(#2196f3.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) Bgc(#2196f3):h Trsdu(.3s) Z(1)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child A
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#673ab7.83) Mb(20px) C(#fff) Fz(2rem) Pos(a) T(200px) Start(25%) Bgc(#673ab7):h Trsdu(.3s) Z(1)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12) Pos(r)"
                    >
                      <ColorBlock
                        width="W(100px)"
                        height="H(75px)"
                        className="Bd Bdc(#fff.36) Bgc(#000.5) Pos(a) B(0) Start(25%) Fz(.9rem) Z(10)"
                      >
                        Child B - 1 - 1
                      </ColorBlock>
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="Bgc(#009688.83) C(#fff) Fz(2rem) Pos(a) T(400px) Start(50%) Bgc(#009688):h Trsdu(.3s) Z(1)">
                    <ColorBlock
                      width="W(200px)"
                      height="H(150px)"
                      className="Bd Bdc(#fff.36) Bgc(#000.12)"
                    >
                      Child C
                    </ColorBlock>
                  </ColorBlock>
                  <ColorBlock className="V(h)" />
                  <ColorBlock className="V(h)" />
                  <ColorBlock className="V(h)" />
                  <div className="StretchedBox D(f) Ai(c) Jc(c) C(#fff) Bgc(#000.83) Bgc(#000):h Trsdu(.3s) Fz(3rem) Fs(i) Tt(u) Z(1)">
                    Modal
                  </div>
                </div>
              </div>
            ]}
          />
        }
      />
    );
  }
}

export default StackingContext;
