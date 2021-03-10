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
          text: 'Section 1',
          content: <HeaderContent/>
        },
        {
          text: 'Section 2',
          content: <ProjectsContent/>
        },
        {
          text: 'Section 3',
          content: <ContactContent/>
        }
      ],
    };
  }

  onLeave(origin, destination, direction) {
   if(destination.index===0){
      document.getElementsByClassName('navbar-link')[1].classList.remove('on');
      document.getElementsByClassName('navbar-link')[2].classList.remove('on');
      document.getElementsByClassName('navbar-link')[0].classList.add('on');
    }
    if(destination.index===1){
      document.getElementsByClassName('navbar-link')[0].classList.remove('on');
      document.getElementsByClassName('navbar-link')[2].classList.remove('on');
      document.getElementsByClassName('navbar-link')[1].classList.add('on');
    }
    if(destination.index===2){
      document.getElementsByClassName('navbar-link')[0].classList.remove('on');
      document.getElementsByClassName('navbar-link')[1].classList.remove('on');
      document.getElementsByClassName('navbar-link')[2].classList.add('on');
    }
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }



    return (
      <div className="App">
       
        
       <Navbar />
        <ReactFullpage
          debug /* Debug logging */

          // fullpage options
          licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={['firstPage', 'secondPage', 'thirdPage']}
          onLeave={this.onLeave.bind(this)}
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