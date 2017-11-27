import React, { Component } from 'react';
import AspectRatio from 'react-aspect-ratio';

import PageCanvas from '../components/PageCanvas';
import Section from '../components/Section';

import 'react-aspect-ratio/aspect-ratio.css';

class AspectRatioPage extends Component {
  render() {
    return (
      <PageCanvas
        title="Aspect Ratio With Flex Parent"
        section={
          <Section
            title="Loading an image with aspect ratio to prevent reflow"
            content={[
              <div className="D(f)">
                <AspectRatio className="Flxb(1/2)" ratio="4/3">
                  <img
                    alt="puppy"
                    src="https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/s1080x1080/e15/fr/18809583_812711995553463_3365235085484752896_n.jpg"
                  />
                </AspectRatio>
              </div>,
              <div className="Maw(600px) C(#000.87)">
                <p>
                  Lorem ipsum dolor sit amet, duis vulputate per in, vide diceret est eu. Tation facete at sed, quo utroque quaestio philosophia id. Cu summo facilisis iudicabit usu, est cu impetus meliore. Sea erant civibus in, facilis referrentur mediocritatem eu nam. Aeterno deseruisse cotidieque per in, no cum meliore admodum.
                </p>
                <p>
                  Cu sonet persequeris vim, et fastidii conclusionemque quo. Ut atqui dicam oblique sit, ad est zril facilisis omittantur. Id luptatum adolescens voluptaria cum. Ut stet facilisi quaestio duo, vim eu antiopam assentior accommodare, at mazim dicant vituperata duo.
                </p>
                <p>
                  Duo consul eruditi an, qui ex lorem paulo errem, ne cum verterem quaerendum temporibus. Facer viderer vim ei, dicam percipit ne cum. In congue sapientem quo, ei mei purto nihil tempor. Ei duo legimus disputando. Qui te enim facilisi, sea quidam recusabo repudiare no.
                </p>
                <p>
                  An duo eirmod minimum, vix ullum affert ceteros ne. Veri postulant te eum, splendide scripserit pri eu. Ex eius delicatissimi sed. Dignissim vituperata instructior mel no. Vidisse interesset et pri. Mea te vocent mentitum, eu cum vitae corrumpit posidonium.
                </p>
                <p>
                  Ad per errem possim. Ex sea quas reprimique, illud propriae eam ea. No has exerci petentium, mea at nibh prima. Pro ut justo feugiat.
                </p>
              </div>
            ]}
          />
        }
      />
    );
  }
}

export default AspectRatioPage;
