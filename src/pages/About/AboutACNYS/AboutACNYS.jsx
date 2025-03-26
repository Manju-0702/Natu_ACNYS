import React from 'react';
import './AboutACNYS.css';
import img1 from '../../../assets/Campus1.png';
import img2 from '../../../assets/Campus1.png';
import img3 from '../../../assets/Campus1.png';
// Add more images as needed

const sections = [
  {
    title: "About ACNYS",
    content: "Alva's College of Naturopathy and yogic science is a vision of philanthropist and connoisseur. Dr. M. Mohan Alva. It came into its nascent existence in the year 2003. Today, within a short span it has catapulted into an epitome of quality of education in the field of naturopathy and yogic sciences rivaling the best institution in the country. It is also an abode of rich cultural and traditional extravaganza of the country as it has a vibrant mix of students from across the country and abroad, which cherish moment of their stay here. Moodubidire is a bustling temple town with air of progressiveness on the long winding NH-13, 35 kms from coastal town of Mangalore. Richly-laden with coconut palms and exotic floras. It is picture perfect destination tucked away in the green valleys down the scenic on its far west. It is also known for its easygoing and highly literate population. It houses a tropical weather with relatively high humidity. The temperature ranges between 27 to 34 Celsius. It is one of those places where the southwest monsoon first touches the Indian shore, beginning with heavy to very spells in June lasting until occasional shower in the month of October.",
    image: img1
  },
  {
    title: "NATUROPATHY & YOGA",
    content: "Naturopathy is not just a system of medicine but a way of life based mainly on the ancient praeme of the application of the simple laws of nature. It is call to Return to Nature and to resort to simple way fliving in harmony with the self, society and environment. Naturopathy provides not only a simple practice approach to the management of disease, but a firm theoretical basis which is applicable to all the holistic medical care. It is based on various drugless treatments like Magneto therapy, Massage therapy, Physiotherapy, Reflexology, Chromo therapy, Acupuncture, Acupressure, Yoga therapy, Psychology, Diet and Fasting therapy. A nature cure physician helps in Nature's effort to overcome disease by applying correct natural modalities and controlling the natural forces to work within safe limits.",
    image: img2
  },
  {
    title: "HYDROTHERAPY",
    content: "Hydrotherapy is a system where water is used at different temperature and forms on the human body for treatment and cure of various diseases and to maintain health. The water is applied through various modes like baths, douches irrigation/enema, compresses, fomentations, packs etc. Hydrotherapy is capable of healing most of the acute & chronic diseases.",
    image: img3
  },
  {
    title: "ACUPUNCTURE",
    content: "Acupuncture is an ancient system of healing developed over thousands of years as part of the traditional medicine of China, Japan and other eastern countries. The practice of acupuncture is based on the discovery that the stimulation of specific areas on the skin affects the functioning of certain organs of the body. It has evolved into system of medicine that restores and maintains health by the insertion of fine needles into acupuncture points just beneath the body's surface. These points are in specific locations and lie on channels of energy. It helps to reduce pain. It increases immunity and resistance of the body. Acupuncture on certain points brings tranquility and sedation. It also brings homeostasis.", 
     image: img3
  },
  {
    title: "ACUPRESSURE",
    content: "Acupressure is one of the ancient of the various and simplest oriental therapies. It produces healing effects on the internal organs of the body through well defined points on the body surface. By applying pressure on these selected points, related organs can be influence for getting rid of their ailment. This therapy is very helpful in acute sinusitis, bronchial asthma, pain in eyes, toothache, throat pain, hyperacidity, constipation, fatigue, migraine, paralysis, naturopathy, stiffness of shoulders, sciatica, back pain, spinal pain, neck pain, headache, nervous problems and hypertension.",
    image: img3
  },
  {
    title: "MANIPULATIVE THERAPY",
    content: "Massage provides relief to people of all ages from infants to seniors from all walks of life the weekend or competitive athletes to the home gardener or overstressed, overworked executive. Massage therapy addresses a variety of health conditions, the most prevalent being stress related tension. Massage has been proven beneficial in treating cancer-related fatigue, sleep disorders, high blood pressure, diabetes, low back pain, immunity suppression, spinal cord injury, autism, post-operative surgery, age related disorders, infertility, eating disorders, smoking cessation and depression. Chiropractic and osteopathy helps in the manipulation of various joints and thus helps in treating all the joint related disorders.",
    image: img3
  },
  {
    title: "MUD THERAPY",
    content: "Mud is one of five element of nature having immense impact on the body in health as well as in sickness. It can be employed conveniently as therapeutic agent. Color of the mud absorbs all the colors of the sun and conveys them to the body. The mud retains moisture and rejuvenates the body. It is employed in treatment of various diseases like constipation, skin diseases etc",
    image: img3
  },
  {
    title: "NUTRITION, HERBS, DIETETICS & FASTING THERAPY",
    content: "Your food is your medicine is the main slogan of nature cure. Fasting is the single greatest natural healing therapy. It is nature's ancient, Universal remedy for many problems. Juice fasting is commonly used (rather than water alone) as mild and effective cleansing plan. Fresh juices are easily assimilated and require minimum digestion while they supply many nutrients and stimulate our body to clear its wastes. Juice fasting is also safer then water fasting because it supports the body nutritionally while cleansing and probably even produces a better detoxification and quicker recovery.",
    image: img3
  },
  {
    title: "PHYSIOTHERAPY",
    content: "Physiotherapy is a service to people to develop, maintain and restore maximum movement and functional ability throughout the lifespan. It includes the provision of services in circumstances where movement and function are threatened by the process of ageing or that of injury or disease. The method of what it means to be healthy. Physiotherapy is concerned with identifying and maximizing movement potential, within the spheres of promotion, prevention, treatment and rehabilitation.", 
    image: img3
  },
  {
    title: "MAGNETO THERAPY",
    content: "The use of magnets is an aid of nature. The application of magnets work as a medicine & restores the body to its natural state. There are several methods of application of magnets to the different parts of the body for the treatment of different ailments. The habitat of human is influenced by magnetic field all around him. This magnetic field influences each and every cell in a body. Any imbalance or obstruction of the magnetic field, present itself as disease and hence can be treated by replacing or recharging the body with magnets. Different types of magnets and different equipments are used to treat different diseases.", 
    image: img3
  },
  {
    title: "CHROMO THERAPY",
    content: "It is also called as colour therapy which is based on the premise that certain colours are infused with healing energies. The therapy uses seven colours of the spectrum which are associated with specific healing properties. These colours are employed through the radiations on body or by administering charged water, oil and pills for treatment.", 
    image: img3
  },
];

const About = () => {
  return (
    <div>
      <div className="about-banner">
        <h1>About Us</h1>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="about-section">
          <img src={section.image} alt={section.title} />
          <div className="about-content">
            <h2>{section.title}</h2>
            <p className="about-text">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;