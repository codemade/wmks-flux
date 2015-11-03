import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

const images = {
  flux: require("./img/flux.svg"),
  codemade: require("./img/codemade.png"),
  chrkhl: require("./img/chrkhl.png"),
  revrng: require("./img/revrng.png"),
  twitter: require("./img/twitter.svg"),
  github: require("./img/github.svg"),
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
  color: 'white',
  textDecoration:'none'
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
              <Text textColor="tertiary">
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
              <Text textColor="tertiary">
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
          <Heading size={2} textColor="tertiary">
            # no framework
          </Heading>
        </Slide>

        <Slide bgColor="#e74c3c">
          <Heading size={2} textColor="tertiary">
            # no library
          </Heading>
        </Slide>

        <Slide bgColor="#27ae60">
          <Heading size={2} textColor="tertiary">
            # just a pattern
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            Why Flux ?
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} textColor="quartary" textFont="secondary">
            How to structure
          </Heading>
          <Heading size={1} fit textColor="tertiary" textFont="secondary">
            a Frontend Application?
          </Heading>
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
            <Heading size={2} fit textColor="quartary">
              Data Flow
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.9">
          <a style={buttonStyles} href="http://codemade.js.org/caffeine" target="_blank">Go to coffee store</a>
        </Slide>

        <Slide bgImage={images.caffeine_components}></Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.9">
          <Heading size={1}>
            use cases
          </Heading>
          <List>
            <ListItem><Appear fid="1">Show all products</Appear></ListItem>
            <ListItem><Appear fid="2">Add article to shopping cart</Appear></ListItem>
            <ListItem><Appear fid="3">Filter articles by intensity</Appear></ListItem>
            <ListItem><Appear fid="4">Show all articles in the shopping cart</Appear></ListItem>
            <ListItem><Appear fid="5">Increase/decrease article amount</Appear></ListItem>
            <ListItem><Appear fid="6">Redeem a coupon</Appear></ListItem>
          </List>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            "Add article to shopping cart"
          </Heading>
          <Appear>
            <Heading size={2} textColor="tertiary">
              How does it work?
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Text textColor="#65878F">
            Use Case: "Add article to shopping cart"
          </Text>
          <Heading size={2} fit>
            Display the article list
          </Heading>
          <Appear>
            <Heading size={2} textColor="tertiary">
              # view
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Text textColor="#65878F">
            Use Case: "Add article to shopping cart"
          </Text>
          <Heading size={2} fit>
            User clicks on an article
          </Heading>
          <Appear>
            <Heading size={2} textColor="tertiary">
              # action
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Text textColor="#65878F">
            Use Case: "Add article to shopping cart"
          </Text>
          <Heading size={2} fit>
            Store article in shopping cart
          </Heading>
          <Appear>
            <Heading size={2} textColor="tertiary">
              # store
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Heading size={2} fit>
            Redeem a coupon
          </Heading>
          <Appear>
            <Heading size={2} textColor="tertiary">
              How does it work?
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Text textColor="#65878F">
            Use Case: "Redeem a coupon"
          </Text>
          <Heading size={2} fit>
            Display shopping cart
          </Heading>
          <Appear>
            <Heading size={2} textColor="tertiary">
              # view
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Text textColor="#65878F">
            Use Case: "Redeem a coupon"
          </Text>
          <Heading size={2} fit>
            User enters coupon code and clicks 'redeem'
          </Heading>
          <Appear>
            <Heading size={2} textColor="tertiary">
              # action
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Text textColor="#65878F">
            Use Case: "Redeem a coupon"
          </Text>
          <Heading size={2} fit>
            Reduce total price by 15%
          </Heading>
          <Appear>
            <Heading size={2} textColor="tertiary">
              # store
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store} width="900" />
          <Appear>
            <Heading size={1} textColor="tertiary" fit>
              FLUX
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store} width="900" />
          <br/><br/>
            <Heading size={1} textColor="tertiary" fit>
              How do action details get into the store?
            </Heading>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store} width="900" />
          <br/><br/>
            <Heading size={1} textColor="tertiary" fit>
              How many stores do you need?
            </Heading>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store} width="900" />
          <br/><br/>
          <Heading size={1} textColor="tertiary" fit>
            What if many stores are interested in an action?
          </Heading>
        </Slide>

        <Slide>
          <Image src={images.view_action_store_dispatcher} width="700"/>
          <Appear>
            <Text textColor="tertiary">
              How does a view notice, that something changed?
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Image src={images.view_action_store_dispatcher} width="700"/>
          <Text textColor="tertiary">
            i.e. the shopping card re-renders, when an article was added!?
          </Text>
        </Slide>

        <Slide>
          <Heading size={1} fit>
            Do it like a mailing list.
          </Heading>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store_event} width="800"/>
          <Appear>
            <Text textColor="secondary">
              If there is something new, send a mail to all subscribers.
            </Text>
          </Appear>
          <Appear>
            <Heading size={2} textColor="tertiary">
              # Store fires event
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store_event} width="800"/>
          <Text textColor="secondary">
            Subscribers get notified & pull new mails.
          </Text>
          <Appear>
            <Heading size={2} textColor="tertiary">
              # View gets notified
            </Heading>
          </Appear>
        </Slide>

        <Slide bgImage={images.caffeine} bgDarken="0.95">
          <Image src={images.view_action_store_event} width="800"/>
          <Text textColor="secondary">
            Subscribers get notified & pull new mails.
          </Text>
            <Heading size={2} textColor="tertiary" fit>
              # pulls data from store
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
          <Heading size={1} fit textColor="tertiary">
            #architecture #library #everything
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit textColor="quartary" textFont="secondary">
            The fact you know FLUX / REACT
          </Heading>
          <Heading size={1} fit textColor="tertiary">
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
