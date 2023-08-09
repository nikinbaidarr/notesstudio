import React from 'react';
import LazyLoad from 'react-lazy-load'
import class1 from './images/route_class1.png'
import class2a from './images/route_class2a.png'
import class2b from './images/route_class2b.png'
import class3 from './images/route_class3.png'
import { SEO } from '../../allComponents.js';

class Lesson extends React.Component {
    
    render() {
        return (
            <>
            <SEO title="Medical Industries - Medical Industry Management" />

            <h1>Conformity Assessment Routes (CE Marking Routes)</h1>

            <div className="content">

            <h2>Steps for Medical Device Compliance</h2>

            <div className="sep">
                
            <ol>
            <li>
            Classification: Figure out which class the device falls under (Refer Annex 9).
            </li>

            <li>
            Choose a conformity assessment route (More on this below).
            </li>

            <li>
            Compile the technical documentation for declaration of conformity and, where necessary, obtain certification from a Notified Body.
            </li>

            <li>
            Appoint an authorized representative, either a freelancer or a consultant in order to register with a Competent Authority (CA). Hold the technical files for inspection by the CA. Once the manufacturer is satisfied that their products meet all the relevant essential requirements, the manufacturer or their authorized representative must register with the CA.
            </li>

            <li>
            Following that, the manufacturer may affix the CE marking on their products and place them on the market.
            </li>

            <li>
            Vigilance and post-market surveillance.
            </li>
            </ol>
            </div>

            <h2>Class I<sub>m</sub> and I<sub>s</sub> Medical Devices</h2>

            <p>
            As for class I<sub>a</sub> and I<sub>b</sub> medical devices, the manufacturer declares
            conformity with the provisions of the directive and regulations and ensures
            that his products comply with relevant essential requirements. The manufacturer
            is responsible for ensuring that his product complies with all the relevant
            essential requirements of the directive. A manufacturer must draw up a written
            statement to this effect (self-declaration).
            </p>

            <p>
            Class I medical device <i>without a measuring function</i> and supplied in
            <i>non-sterile</i> conditions does not require the involvement of a notified
            body. Conformity to the International and European Standard EN ISO:13485 is
            voluntary. On the other hand, manufacturers of I<sub>s</sub> and I<sub>m</sub> medical devices
            must apply to a notified body for certification of the aspects of manufacture
            relating to sterility or metrology. For both I<sub>s</sub> and I<sub>m</sub> medical devices, follow
            Annex 4, 5 and 6.
            </p>

            <p>
            The following flow chart depicts the conformity routes for Class I medical
            devices:
            </p>

            <LazyLoad>
            <figure>
            <img src={class1} alt="Flow chart depicting the conformity routes for Class I medical devices"/>
            <figcaption style={{width: '65%'}}>1: Conformity routes for Class I<sub>s</sub> and I<sub>m</sub> medical devices.</figcaption>
            </figure>
            </LazyLoad>

            <h2>Class II<sub>a</sub> Medical Devices</h2>

            <p>
            In the case of devices falling within class II<sub>a</sub>, other than devices which
            are custom made or intended for clinical investigations, the manufacturer
            shall, in order to affix the CE marking, follow the procedures relating to the
            EC declaration of conformity set out in various Annexes. Unlike for class I,
            where the manufacturer themselves declare conformity, declaration for class
            II<sub>a</sub> products must be backed up in all cases with conformity assessment by a
            Notified Body.
            </p>

            <p>
            For Class II<sub>a</sub>, there are also two routes. Annex 2 or Annex 7 and Annex 4, 5, or 6.
            Annex 2 costs more so usually the route with Annex 7 and then Annex 4, 5, or 6
            is chosen.
            </p>

            <p>
            The flowchart below depicts the conformity routes for Class II<sub>a</sub> medical
            devices:
            </p>

            <LazyLoad>
            <figure>
            <img src={class2a} alt="Flow chart depicting the conformity routes for Class I medical devices"/>
            <figcaption style={{width: '80%'}}>2: 
            Flowchart showing conformity assessment routes for class II<sub>a</sub>
            medical devices. The assessment may, at the manufacturer's
            choice, be (i) examination and testing each product or
            homogeneous batch of products (Annex 4), or (ii) audit of the
            production quality assurance system excluding design (Annex 5),
            or (iii) audit of final inspection and testing excluding design
            & manufacture, or (iv) an audit of full quality assurance system
            (Annex $2$). Involvement of a notified body is mandatory in all
            cases.</figcaption>
            </figure>
            </LazyLoad>


            <h2>Class II<sub>b</sub> Medical Devices</h2>

            <p>
            In case of devices falling within class II<sub>b</sub>, other than devices which are
            custom-made or intended for clinical investigations, the manufacturer shall, in
            order to affix the CE marking either follow the procedure relating to the EC
            declaration of conformity set out in various annexes. Like Class II<sub>a</sub>, for
            Class II<sub>b</sub>, there are two routes. Annex 2 or Annex 3 and then Annex 4, 5
            or 6.
            </p>

            <p>
            The following flowchart depicts the CE marking routes for class II<sub>b</sub> medical
            devices:
            </p>

            <LazyLoad>
            <figure>
            <img src={class2b} alt="Flow chart depicting the conformity routes for Class I medical devices"/>
            <figcaption style={{width: '80%'}}>3: Flowchart showing
            conformity assessment routes for class IIb medical devices. The
            assessment may, at the manufacturer’s choice, be (i) an audit of
            full quality assurance system (Annex 2) or (ii) a
            type-examination (Annex 3), followed by either (i) examination
            and testing each product or homogeneous batch of products , or
            (ii) audit of the production quality assurance system excluding
            design , or (iii) audit of final inspection and testing excluding
            design & manufacture. Involvement of a notified body is mandatory
            in all cases. 
            </figcaption>
            </figure>
            </LazyLoad>


            <h2>Class III Medical Devices</h2>


            <p>Conformity routes for class III medical devices is very analogous to that for
            class II<sub>b</sub> except that if the manufacturer chooses to audit the full quality
            assurance, they must also perform a design dossier examination, and if the
            manufacturer chooses to perform a type examination, it must be followed by
            either (i) examination and testing of each product or homogeneous batch of
            products (Annex 4) or (ii) a production quality assurance excluding the
            design (Annex 5) (but not Annex 6).</p>
            <LazyLoad>
            <figure>
            <img src={class3} alt="Flow chart depicting the conformity routes for Class I medical devices"/>
            <figcaption style={{width: '80%'}}>4:
            Flowchart showing conformity assessment routes for class III
            medical devices.~The assessment may, at the manufacturer's
            choice, be (i) an audit of full quality assurance system (Annex
            2) or (ii) a type-examination (Annex 3), followed by
            either (i) examination and testing each product or homogeneous
            batch of products , or (ii) audit of the production quality
            assurance system excluding design , or (iii) audit of final
            inspection and testing excluding design & manufacture.
            Involvement of a notified body is mandatory in all cases.

            </figcaption>
            </figure>
            </LazyLoad>

            <h1>Essential Principles &amp; Safety of Medical Device</h1>

            <h2>Harmonization of safety and performance criteria</h2>
            <p>Great need to harmonize essential safety and performance criteria for a medical device that allows the manufacturer to demonstrate that their product is suitable for its intended purpose. This goal was achieved through the publication of guidance on the subject entitled <em>Essential Principles of Safety and Performance of Medical Devices</em> in 2005. It applied to the majority of medical devices and also to in vitro diagnostic devices.</p>
            <p><strong>Why was it necessary to harmonize safety and performance criteria of medical devices?</strong></p>
            <p>Harmonization, i.e. consistent identification, selection and application of safety and performance principles to a medical device offers significant benefits to the manufacturer, retailer or supplier, surgeon, patient, and also to regulatory authorities because it allows its manufacturer to design, manufacture and demonstrate that the device is suitable for its intended use. Moreover, eliminating differences between jurisdictions decreases the cost of gaining regulatory compliance, which in turn allows earlier access to new technologies and treatment procedures.</p>

            <h1>Essential Requirements for Medical Devices</h1>

            <h2>General Requirements for Safety and Performance of Particular Medical Devices</h2>

            <h3>General Requirement 1</h3>
            <p>The device must be designed and manufactured in such a way that, when used under conditions and for the purposes intended and where applicable by virtue of the technical knowledge, experience, education or training of intended users, they will not compromise the clinical condition or the safety of patients, or the safety and health of users or where applicable other persons provided that any risks which may be associated with their use constitute acceptable risks when weighed against the benefits to the patients and are compatible with a high level of protection of health and safety.</p>

            <h3>General Requirement 2</h3>
            <p>The solutions adopted by the manufacturer for the design and manufacture of the devices should conform to safety principles, taking account of the generally acknowledged state-of-the-art. When risk reduction is required, the manufacturer should control the risks so that the residual risks associated with each hazard is judged acceptable.</p>
            <p>The manufacturer should apply the following principles in the priority order listed:</p>
            <ol>
            <li>Identify known or foreseeable hazards and estimate the associated risks arising from the intended use and foreseeable misuse.</li>
            <li>Eliminate risks as far as reasonably practicable through inherently safe design and manufacture.</li>
            <li>Reduce the remaining risks as far as is reasonably practicable by taking adequate protection measures, including alarms.</li>
            <li>Inform users of any residual risks due to any shortcomings of the protection measures adopted.</li>
            </ol>




            </div> {/* Content */}
            </>
        )
    }
}

export default Lesson;

