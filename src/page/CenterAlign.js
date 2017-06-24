import React, { Component } from 'react';

import ColorBlock from '../components/ColorBlock';
import PageCanvas from '../components/PageCanvas';
import Section from '../components/Section';

class CenterAlign extends Component {
  render() {
    return (
      <PageCanvas
        title="How to use CSS to vertical align"
        section={
          <Section
            title="Different approches of CSS vertical align"
            content={[
              <div className="BdB Bdbc(#000.12) Pb(20px)">
                <h2>Using transform</h2>
                <div className="Bd Bdc(#000.12) W(400px) H(300px) Pos(r) Ta(c) Bgc(#2196f3.83)">
                  <div className="Bd Bdc(#000.12) Bgc(#fff.83) Bgc(#fff):h Bdrs(4px) C(#000.83) P(20px) T(50%)  Start(50%) Pos(a) Translate(-50%,-50%)">
                    I am centered 😊
                  </div>
                </div>
              </div>,
              <div className="BdB Bdbc(#000.12) Pb(20px)">
                <h2>Using a veritcal shim</h2>
                <ColorBlock className="Bd Bdc(#000.12) W(400px) H(300px) Ta(c) Bgc(#2196f3.83)">
                  <div className="Bd Bdc(#000.12) Bgc(#fff.83) Bgc(#fff):h Bdrs(4px) C(#000.83) P(20px)">
                    I am centered 😊
                  </div>
                </ColorBlock>
              </div>,
              <div className="BdB Bdbc(#000.12) Pb(20px)">
                <h2>Using flexbox</h2>
                <div className="Bd Bdc(#000.12) W(400px) H(300px) Bgc(#2196f3.83) D(f) Ai(c) Jc(c)">
                  <div className="Bd Bdc(#000.12) Bgc(#fff.83) Bgc(#fff):h Bdrs(4px) C(#000.83) P(20px)">
                    I am centered 😊
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

export default CenterAlign;
