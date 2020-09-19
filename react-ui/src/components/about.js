import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Modal, ModalHeader, ModalBody,Button } from 'reactstrap';

function About(props) {

  const [modelnd, togglemodel] = useState(false);
  const [modele, togglemodele] = useState(false);
  const [modelhd, togglemodelhd] = useState(false);
  const [modelid, togglemodelid] = useState(false);

  const [modelenext, togglemodelenext]=useState(false);
  const [modelhdnext,togglemodelhdnext]=useState(false);
  const [modelndnext,togglemodelndnext]=useState(false);
  const [modelidnext,togglemodelidnext]=useState(false);

  const closeBtn1 = <button className="close" onClick={() => togglemodel(!modelnd)}></button>;
  const closeBtn2 = <button className="close" onClick={() => togglemodele(!modele)}></button>;
  const closeBtn3 = <button className="close" onClick={() => togglemodelhd(!modelhd)}></button>;
  const closeBtn4 = <button className="close" onClick={() => togglemodelid(!modelid)}></button>;
  const closeBtn5 = <button className="close" onClick={() => togglemodelenext(!modelenext)}></button>;
  const closeBtn6 = <button className="close" onClick={() => togglemodelhdnext(!modelhdnext)}></button>;
  const closeBtn7 = <button className="close" onClick={() => togglemodelndnext(!modelndnext)}></button>;
  const closeBtn8 = <button className="close" onClick={() => togglemodelidnext(!modelidnext)}></button>;

  function enext(){
    togglemodele(!modele);
    togglemodelenext(!modelenext);
  }
  function nexthd(){
    togglemodelhd(!modelhd);
    togglemodelhdnext(!modelhdnext);
  }
  function nextnd(){
    togglemodel(!modelnd);
    togglemodelndnext(!modelndnext);
  }
  function nextid(){
    togglemodelid(!modelid);
    togglemodelidnext(!modelidnext);
  }

  return (

    <div className="container aboutmain">

      <Modal isOpen={modelnd} className="aboutmodel" toggle={() => togglemodel(!modelnd)}>
        <ModalHeader toggle={() => togglemodel(!modelnd)} close={closeBtn1}>Nutritional Deficiency</ModalHeader>
        <ModalBody>
          <b>Nutritional Deficiency is a condition that results from eating a diet in which one or more nutrients are either not enough or are too much such that the diet causes health problems.</b><br /><br />
          <p>There are two main types of undernutrition: protein-energy malnutrition and dietary deficiencies. Protein-energy malnutrition has two severe forms: marasmus (a lack of protein and calories) and kwashiorkor (a lack of just protein). Common micronutrient deficiencies include: a lack of iron, iodine, and vitamin A.</p><br /><br />
          <b>Symptom</b><br /><br />
          <li>pallor, or pale skin</li>
          <li>fatigue</li>
          <li>weakness</li>
          <li>trouble breathing</li>
          <li>unusual food cravings</li>
          <li>constipation</li>
          <li>sleepiness</li>
          <li>heart palpitations</li>
          <li>feeling faint or fainting</li>
          <Button onClick={()=>{nextnd()}} color="warning">How to improve?</Button>
        </ModalBody>
      </Modal>

      <Modal isOpen={modelndnext} className="aboutmodel" toggle={() => togglemodelenext(!modelndnext)}>
        <ModalHeader toggle={() => togglemodelndnext(!modelndnext)} close={closeBtn7}>Exercise</ModalHeader>
        <ModalBody>
          
        <b>Tips</b><br /><br />
            <p><b>1.	Dietary Changes: <br /> </b>
            Changing your eating habits in the case of a minor deficiency. For example, people with iron deficiency anemia should include more meat, eggs, dark meat poultry, vegetables, and legumes in their diet.          </p>
            <p><b>2.	Supplements<br /> </b>
            We recommend that you get most of the nutrients from food. In some cases, you may need to take supplements or multivitamins. Please consult your doctor before taking any nutritional supplements.</p>

        </ModalBody>
      </Modal> 


      <Modal isOpen={modele} className="aboutmodel" toggle={() => togglemodele(!modele)}>
        <ModalHeader toggle={() => togglemodele(!modele)} close={closeBtn2}>Exercise</ModalHeader>
        <ModalBody>
         
            <b>Why you need exercise?</b><br /><br />
            <p><b>1. Help to control weight<br /> </b>
          Exercise plays an important role in controlling your weight and preventing obesity. To maintain your weight, the calories you eat and drink must equal the energy you burn. To lose weight, you must use more calories than you eat and drink.
          </p>
            <p><b>2.	Reduce your risk of heart diseases<br /> </b>
          Exercise strengthens your heart and improves your circulation.</p>
            <p><b>3.	Help your body manage blood sugar and insulin levels. <br /> </b>
          Exercise can lower your blood sugar level and help your insulin work better. This can cut down your risk for metabolic syndrome and type 2 diabetes.          </p>
            <p><b>4.	Improve your mental health and mood. <br /> </b>
          During exercise, your body releases chemicals that can improve your mood and make you feel more relaxed.          </p>
            <p><b>5.	Strengthen your bones and muscles.<br /> </b>
          Regular exercise can help kids and teens build strong bones. Later in life, it can also slow the loss of bone density that comes with age.           </p>
            <p><b>6.	Increase your chances of living longer. <br /> </b>
          Studies show that physical activity can reduce your risk of dying early from the leading causes of death, like heart disease and some cancers.          </p>
            <Button onClick={()=>{enext()}} color="warning">How to exercise?</Button>
        </ModalBody>
      </Modal>
      <Modal isOpen={modelhd} className="aboutmodel" toggle={() => togglemodelhd(!modelhd)}>
        <ModalHeader toggle={() => togglemodelhd(!modelhd)} close={closeBtn3}>Health Diet</ModalHeader>
        <ModalBody>
        <b>Why you need health diet?</b><br /><br />
            <p><b>1.	Weight Loss<br /> </b>
            Losing weight can help to reduce the risk of chronic conditions. If a person is overweight or obese, they have a higher risk of developing several conditions, including: heart disease, non-insulin dependent diabetes mellitus, poor bone density and some cancers          </p>
           
            <p><b>2.	Better Mood<br /> </b>
            Emerging evidence suggests a close relationship between diet and mood. While a healthful diet may improve overall mood, it is essential for people with depression to seek medical care.
            </p>
            <p><b>3.	Improve Memory <br /></b>
            A healthful diet may help prevent dementia and cognitive decline.
            </p>
            <Button onClick={()=>{nexthd()}} color="warning">How to eat Health</Button>
    
        </ModalBody>
      </Modal>
      <Modal isOpen={modelid} className="aboutmodel" toggle={() => togglemodelid(!modelid)}>
        <ModalHeader toggle={() => togglemodelid(!modelid)} close={closeBtn4}>Iron Dificiency</ModalHeader>
        <ModalBody>
        <b>Iron deficiency is the state in which a body lacks enough iron to supply its needs.</b><br /><br />
          <p>Iron is present in all cells in the human body and has several vital functions, such as carrying oxygen to the tissues from the lungs as a key component of the hemoglobin protein, acting as a transport medium for electrons within the cells in the form of cytochromes, and facilitating oxygen enzyme reactions in various tissues. Too little iron can interfere with these vital functions and lead to morbidity and death.</p><br /><br />
          <b>Symptom</b><br /><br />
          <li>Fatigue</li>
          <li>Dizziness</li>
          <li>Pallor</li>
          <li>Hair Loss</li>
          <li>Irritability</li>
          <li>Weakness</li>
          <li>Abnormal rapid breathing</li>
          <Button onClick={()=>{nextid()}} color="warning">How to improve?</Button>
        </ModalBody>
      </Modal>
      <Modal isOpen={modelidnext} className="aboutmodel" toggle={() => togglemodelenext(!modelidnext)}>
        <ModalHeader toggle={() => togglemodelndnext(!modelidnext)} close={closeBtn8}>Exercise</ModalHeader>
        <ModalBody>
          
        <b>Tips</b><br /><br />
            <p><b>1.	Eat lean red meat:<br /> </b>
            This is the best source of easily absorbed heme iron. Eating it several times per week can help if you are deficient.          </p>
            <p><b>2.	Eat chicken and fish:<br /> </b>
            These are good sources of heme iron. Eat a variety of them.</p>
            <p><b>3.	Eat vitamin C-rich foods (citrus fruits, dark green leafy vegetables, bell peppers, melons and strawberries):<br /></b>
            Eat vitamin C-rich foods during meals to increase the absorption of non-heme iron. For example, some lemon juice drizzled over leafy greens will increase the amount you absorb.</p>
            <p><b>4.	choose foods rich in non-heme iron: <br /></b>
            If you don't eat meat and fish, include plenty of iron-rich plant foods in your diet.</p>

        </ModalBody>
      </Modal> 

      
      <Modal isOpen={modelenext} className="aboutmodel" toggle={() => togglemodelenext(!modelenext)}>
        <ModalHeader toggle={() => togglemodelenext(!modelenext)} close={closeBtn5}>Exercise</ModalHeader>
        <ModalBody>
          
        <b>How to exercise correctly?</b><br /><br />
            <p><b>1.	Piece your workout together<br /> </b>
            You don’t need to get all your exercise at one time. Ten minutes morning, noon, and night can give much of the same benefit as 30 minutes all at once.          </p>
            <p><b>2.	Exercise with a friend<br /> </b>
            Finding a workout partner can help keep you on track and motivate you to get out the door.</p>
            <p><b>3.	Keep it brisk <br /> </b>
            When you walk, make it brisk, since this may help control weight better than walking at a leisurely pace. What is brisk enough? Walk as though you are meeting someone for lunch and you are a little late.        </p>
            <p><b>4.	Turn off the TV, computer, and smart phone <br /> </b>
            Cutting back on screen time is a great way to curb your “sit time.” Move around instead, by visiting the gym or even cleaning the house. </p>
            <p><b>5.	Turn sit time into fit time<br /> </b>
            Try to combine cardiovascular exercise with a sedentary activity that you already do. For example, try doing simple exercises while watching TV, or set a reminder at work to get up and walk a few minutes every hour.</p>
            <p><b>6.	Reward yourself <br /> </b>
            Set short-term goals—and reward yourself for achieving them. Try targeting a specific event, such as a road race or a walk-for-charity, to participate in—this can help keep you motivated. </p>
        </ModalBody>
      </Modal> 
      <Modal isOpen={modelhdnext} className="aboutmodel" toggle={() => togglemodelhdnext(!modelhdnext)}>
        <ModalHeader toggle={() => togglemodelhdnext(!modelhdnext)} close={closeBtn6}>Health Diet</ModalHeader>
        <ModalBody>
        <b>How to eat correctly?</b><br /><br />
           <p>1.	swapping soft drinks for water and herbal tea<br /> </p>
           <p>2.	eating no meat for at least 1 day a week<br /> </p>
            <p>3.	ensuring that produce makes up about 50 percent of each meal <br /> </p>
            <p>4.	swapping cow’s milk for plant-based milk <br /> </p>
            <p>5.	eating whole fruits instead of drinking juices, which contain less fiber and often include added sugar<br /> </p>
            <p>6.	avoiding processed meats, which are high in salt and may increase the risk of colon cancer<br /> </p>
            <p>7.	eating more lean protein, which can be found in eggs, tofu, fish, and nuts<br /> </p>

        </ModalBody>
      </Modal>


      <div className="row div220">
        <div className="col-12 col-sm-4">
          <motion.div className="aboutcardo" whileHover={{ scale: 0.8 }} onClick={() => togglemodel(!modelnd)}><div className="aboutcardi">
            <b>Nutritional Deficiency </b>
            <p>9 in 10 people are suffering from this ! </p>
          </div></motion.div>
        </div>
        <div className="col-0 col-sm-4">
         
        </div>
        <div className="col-12 col-sm-4">
        <motion.div className="aboutcardo" whileHover={{ scale: 0.8 }} onClick={() => togglemodelhd(!modelhd)}><div className="aboutcardi">
            <b>Healthy Diet </b>
            <p>How to eat well and yummy !</p>
          </div></motion.div>
        </div>
      </div>
      <div className="row div220">
        <div className="col-0 col-sm-4"></div>
        <div className="col-12 col-sm-4">
          <motion.div
            animate={{
              scale: [1, 1, 1, 1, 1],
              rotate: [-15, -15, 15, 15, -15],

            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.6, 0.8, 1],
              loop: Infinity,
              repeatDelay: 1
            }}
            className="aboutquestion"
          />

        </div>
        <div className="col-0 col-sm-4"> </div>
      </div>
      <div className="row div220">
        <div className="col-12 col-sm-4">
        <motion.div className="aboutcardo" whileHover={{ scale: 0.8 }} onClick={() => togglemodelid(!modelid)}><div className="aboutcardi">
          <b>Iron Deficiency </b>
          <p>Do you always feel dizzy?</p>
        </div></motion.div>
        </div>
        <div className="col-0 col-sm-4"></div>
        <div className="col-12 col-sm-4">
        <motion.div className="aboutcardo" whileHover={{ scale: 0.8 }} onClick={() => togglemodele(!modele)}><div className="aboutcardi">
            <b>Exercise </b>
            <p>Why exercise and how ?</p>
          </div></motion.div>
        </div>
      </div>
    </div>



  );
}


export default About;

