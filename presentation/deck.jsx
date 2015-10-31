import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  flux: require("./flux.svg"),
  codemade: require("./codemade.png"),
  chrkhl: require("./chrkhl.png"),
  revrng: require("./revrng.png"),
  twitter: require("./twitter.svg"),
  github: require("./github.svg"),
  caffeine: require("./img/caffeine.png"),
  caffeine_components: require("./img/caffeine_components.png"),
  view_action_store: require("./img/view_action_store.png"),
  view_action_store_dispatcher: require("./img/view_action_store_dispatcher.png"),
  view_action_store_event: require("./img/view_action_store_event.png"),
  applauseMinions: require("./img/applauseMinions.gif")
};

const styles = {
  codemade: {width: "60px", marginTop: "-20px", filter: "grayscale(1) invert(1) contrast(1)"},
  avatar: { width: "200px", borderRadius: "100px", border: "6px double white" },
  iconTwitter: {width: "40px", verticalAlign: "middle", marginRight: "20px"},
  iconGithub: {width: "30px", verticalAlign: "middle"}
};

preloader([images.city, images.kat]);

const buttonStyles = {
  backgroundColor: '#3498db',
  border: 'none',
  borderRadius: '4px',
  fontSize: '20px',
  padding: '10px',
  color: 'white'
};

export default class extends React.Component {
  render() {
    return (
      <Deck transitionDuration={800}>
        <Slide transition={["slide"]}>
          <Heading textSize="12em" lineHeight={0.1} textColor="quartary" textFont="secondary">
            Flux
          </Heading>
          <Image src={images.flux} width="400px"/>
          <Text bold caps textColor="secondary">
            Webmontag Kassel, 09. November 2015
          </Text>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading textSize="12em" lineHeight={0.1} textColor="quartary" textFont="secondary">
            codemade<Image src={images.codemade} style={styles.codemade} />
          </Heading>
          <Layout>
            <Fill>
              <Text textColor="secondary">
                <Image src={images.revrng} style={styles.avatar}/>
                <br />
                René Viering
                <br />
                <a href="https://twitter.com/rvrng">
                  <Image src={images.twitter} style={styles.iconTwitter} />
                </a>
                <a href="https://github.com/revrng">
                  <Image src={images.github} style={styles.iconGithub} />
                </a>
              </Text>
            </Fill>
            <Fill>
              <Text textColor="secondary">
                <Image src={images.chrkhl} style={styles.avatar}/>
                <br />
                Christian Kühl
                <br />
                <a href="https://twitter.com/rvrng">
                  <Image src={images.twitter} style={styles.iconTwitter} />
                </a>
                <a href="https://twitter.com/rvrng">
                  <Image src={images.github} style={styles.iconGithub} />
                </a>
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            What is Flux ?
          </Heading>
          <br />
          <Appear>
            <BlockQuote>
              <Quote>
                lat.: Flow
              </Quote>
            </BlockQuote>
          </Appear>
        </Slide>

        <Slide bgColor="#e74c3c">
          <Heading size={2} textColor="white">
            # no framework
          </Heading>
        </Slide>

        <Slide bgColor="#e74c3c">
          <Heading size={2} textColor="white">
            # no library
          </Heading>
        </Slide>

        <Slide bgColor="#27ae60">
          <Heading size={2} textColor="white">
            # just a pattern
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            Why Flux ?
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <BlockQuote>
            <Quote>
              No one knows how to structure a front-end application
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit>
            libraries/frameworks are taught
          </Heading>
          <Heading size={2} fit>
            never BEST PRACTICES
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit>
            The real problem:
          </Heading>
          <Appear>
            <Heading size={2} fit textColor="secondary">
              Data Flow
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.9">
          <Link style={buttonStyles} href="http://codemade.js.org/caffeine">Go to coffee store</Link>
        </Slide>

        <Slide bgImage={images.caffeine_components}></Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.9">
          <Heading size={1}>
            use cases
          </Heading>
          <List>
            <ListItem><Appear fid="1">Show all products</Appear></ListItem>
            <ListItem><Appear fid="2">Add article to shopping cart (and actualize shopping cart)</Appear></ListItem>
            <ListItem><Appear fid="3">Filter articles by intensity</Appear></ListItem>
            <ListItem><Appear fid="4">Show all articles in the shopping cart</Appear></ListItem>
            <ListItem><Appear fid="5">Increase/decrease article amount</Appear></ListItem>
            <ListItem><Appear fid="6">Redeem a coupon</Appear></ListItem>
          </List>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            Add article to shopping cart
          </Heading>
          <Appear>
            <Heading size={2} textColor="white">
              How does it work?
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            The user sees the article list
          </Heading>
          <Appear>
            <Heading size={2} textColor="white">
              # view
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            The user clicks on an article to add
          </Heading>
          <Appear>
            <Heading size={2} textColor="white">
              # action
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            It needs to be saved, that the article has been added.
          </Heading>
          <Appear>
            <Heading size={2} textColor="white">
              # store
            </Heading>
          </Appear>
        </Slide>



        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            Redeem a coupon
          </Heading>
          <Appear>
            <Heading size={2} textColor="white">
              How does it work?
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            The user sees the shopping cart
          </Heading>
          <Appear>
            <Heading size={2} textColor="white">
              # view
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            The user adds the coupon code and clicks 'redeem'
          </Heading>
          <Appear>
            <Heading size={2} textColor="white">
              # action
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            The total price must be reduced by 15%
          </Heading>
          <Appear>
            <Heading size={2} textColor="white">
              # store
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store} width="900" />
          <Appear>
            <Heading size={1} textColor="white" fit>
              FLUX
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store} width="900" />
          <br/><br/>
            <Heading size={1} textColor="white" fit>
              How did the infos of actions get into the store?
            </Heading>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store} width="900" />
          <br/><br/>
            <Heading size={1} textColor="white" fit>
              How many stores are there?
            </Heading>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store} width="900" />
          <br/><br/>
            <Heading size={1} textColor="white" fit>
              What if an action is relevant for more than one store?
            </Heading>
        </Slide>


        <Slide bgImage={images.caffeine} bgDarken="0.99">
          <Image src={images.view_action_store_dispatcher} width="900"/>
        </Slide>


        <Slide>
          <Image src={images.view_action_store_dispatcher} width="900"/>
          <Heading size={1} fit>
            How did a view notice, that anything changed?
          </Heading>
        </Slide>

        <Slide>
          <Image src={images.view_action_store_dispatcher} width="900"/>
          <Heading size={1} fit>
            i.e. the shopping card re-renders, if an article has been added!?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit>
            Do it like a mailing list.
          </Heading>
        </Slide>        

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store_event} width="800"/>
          <Appear>
            <Heading size={2} fit>
              If there is something new, send a mail to all subscribers.
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} textColor="white">
              # Store fires an event
            </Heading>
          </Appear>
        </Slide> 

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store_event} width="800"/>
          <Heading size={2} fit>
            Subscribers get notified and pull the new mails. 
          </Heading>
          <Appear>
            <Heading size={2} textColor="white">
              # the view gets notified
            </Heading>
          </Appear>
        </Slide> 

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store_event} width="800"/>
          <Heading size={2} fit>
            Subscribers get notified and pull the new mails. 
          </Heading>
            <Heading size={2} textColor="white" fit>
              # and pulls new data from the store.
            </Heading>
        </Slide> 


        <Slide transition={["slide"]}>
          <Heading size={1} textColor="quartary" textFont="secondary">
            Actions
          </Heading>
          <List>
            <ListItem><Appear fid="1">... contain at least the description of an intention to do something</Appear></ListItem>
            <ListItem><Appear fid="2">... often include an additional payload</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} textColor="quartary" textFont="secondary">
            Dispatcher
          </Heading>
          <List>
            <ListItem><Appear fid="1">... dispatches actions to the registered stores</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} textColor="quartary" textFont="secondary">
            Stores
          </Heading>
          <List>
            <ListItem><Appear fid="1">... hold state and data of the application</Appear></ListItem>
            <ListItem><Appear fid="2">... register a callback with the dispatcher for specific actions</Appear></ListItem>
            <ListItem><Appear fid="2">... react to actions and actualize their state</Appear></ListItem>
            <ListItem><Appear fid="2">... fire events if they changed their state (in consequence of actions)</Appear></ListItem>
            <ListItem><Appear fid="2">... are single sources of truth</Appear></ListItem>
            <ListItem><Appear fid="2">In real-world apps there are many stores</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} textColor="quartary" textFont="secondary">
            Views
          </Heading>
          <List>
            <ListItem><Appear fid="1">... react to change events from stores</Appear></ListItem>
            <ListItem><Appear fid="2">Any number of components can react to change events</Appear></ListItem>
            <ListItem><Appear fid="2">... trigger actions</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            Choose wisely!
          </Heading>
          <Heading size={1} fit textColor="white">
            #architecture #library #everything
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The fact you know FLUX / REACT
          </Heading>
          <Heading size={1} fit textColor="white">
            doesn't mean to use it for EVERYTHING!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.applauseMinions} bgDarken="0.7">
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The end!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
