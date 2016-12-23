import React, {Component} from 'react';
import { Link, Match } from 'react-router'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ params }) => (
  <div>
    <h3>{params.topicId}</h3>
  </div>
)


const Topics = ({ pathname }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${pathname}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${pathname}/components`}>Components</Link></li>
      <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Match pattern={`${pathname}/:topicId`} component={Topic}/>
    <Match pattern={pathname} exactly render={() => (
      <h3>Please select a topic</h3>
    )}/>
  </div>
)



class HomeContent extends Component {
    render() {
        return (
            <div className="home-content">
                    <Match exactly pattern="/" component={Home} />
                    <Match pattern="/movie" component={About} />
                    <Match pattern="/music" component={Topics} />
            </div>
        );
    }
}

export default HomeContent;
