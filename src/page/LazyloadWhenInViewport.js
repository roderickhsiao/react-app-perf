import React, { Component } from 'react';
import LazyObject from 'react-lazy-object';

import PageCanvas from '../components/PageCanvas';
import Section from '../components/Section';

class LazyloadWithEmptyImage extends Component {
  render() {
    return (
      <PageCanvas
        title="Lazyload image"
        section={
          <Section
            title="Lazy load when in viewport (scroll down)"
            content={[
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
              </div>,
              <div className="Maw(400px)">
                <LazyObject
                  aspectRatioProps={{
                    alt: 'puppy'
                  }}
                  src="https://scontent-sjc3-1.cdninstagram.com/vp/37f6e0b0cfe9d5553c695ca7c690f70a/5CFD8F2B/t51.2885-15/e35/45655263_495793294244515_3817527841468867835_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com"
                />
              </div>
            ]}
          />
        }
      />
    );
  }
}

export default LazyloadWithEmptyImage;
