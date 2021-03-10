import * as React from "react"
import HeaderContent from "./components/HeaderContent"
import ProjectsContent from "./components/ProjectsContent"
import ContactContent from "./components/ContactContent"
import Navbar from "./components/Navbar"
import ReactFullpage from '@fullpage/react-fullpage';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      fullpages: [
        {
          text: 'Section',
          content: <HeaderContent/>
        },
        {
          text: 'Section',
          content: <ProjectsContent/>
        },
        {
          text: 'Section',
          content: <ContactContent/>
        }
      ],
    };
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    if(document.body.className == "fp-viewing-firstPage"){
      document.getElementsByClassName("navbar-link")[1].classList.remove("on")
      document.getElementsByClassName("navbar-link")[2].classList.remove("on")
      document.getElementsByClassName("navbar-link")[0].classList.add("on")
    }
    if(document.body.className == "fp-viewing-secondPage"){
      document.getElementsByClassName("navbar-link")[0].classList.remove("on")
      document.getElementsByClassName("navbar-link")[2].classList.remove("on")
      document.getElementsByClassName("navbar-link")[1].classList.add("on")
    }
    if(document.body.className == "fp-viewing-thirdPage"){
      document.getElementsByClassName("navbar-link")[0].classList.remove("on")
      document.getElementsByClassName("navbar-link")[1].classList.remove("on")
      document.getElementsByClassName("navbar-link")[2].classList.add("on")
    }



    return (
      <div className="App">
       
        
        <Navbar/>
        <ReactFullpage
          debug /* Debug logging */

          // fullpage options
          licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={['firstPage', 'secondPage', 'thirdPage']}
          sectionSelector={SECTION_SEL}

          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text, content }) => (
                  <div key={text} className={SEL}>
                    {content}
                  </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
      
    );

    
  }
}

export default App;