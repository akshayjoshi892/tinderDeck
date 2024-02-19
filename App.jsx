import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {SvgXml} from 'react-native-svg';

const {width, height} = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = height * 0.6;

const XIcon = `
  <svg fill="#ffffff" viewBox="-20 -20 240.00 240.00" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-20" y="-20" width="240.00" height="240.00" rx="120" fill="#fb664b" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path></g></svg>
`;

const CheckmarkIcon = `
  <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-109.77 -109.77 768.41 768.41" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-109.77" y="-109.77" width="768.41" height="768.41" rx="384.205" fill="#2ff415" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.097746"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="449.34,47.966 195.46,301.845 99.533,205.917 0,305.449 95.928,401.378 195.46,500.907 294.99,401.378 548.873,147.496 "></polygon> </g> </g> </g></svg>
`;

const CardDeck = () => {
  const cards = [
    {name: 'Card 1', color: '#92cdf3'},
    {name: 'Card 2', color: '#80e7ba'},
    {name: 'Card 3', color: '#fcd689'},
    {name: 'Card 4', color: '#cc8e62'},
    {name: 'Card 5', color: '#be5b5e'},
  ];

  const onSwiped = type => {
    console.log(`Swiped ${type}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Swiper
          cards={cards}
          renderCard={card => (
            <View style={[styles.card, {backgroundColor: card.color}]}></View>
          )}
          onSwipedLeft={() => onSwiped('left')}
          onSwipedRight={() => onSwiped('right')}
          stackSize={3}
          cardVerticalMargin={20}
          stackSeparation={15}
          animateOverlayLabelsOpacity
          animateCardOpacity
          backgroundColor="transparent"
          overlayLabels={{
            left: {
              title: <SvgXml xml={XIcon} width="64" height="64" />,
              style: {
                label: {
                  color: 'white',
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -60,
                },
              },
            },
            right: {
              title: <SvgXml xml={CheckmarkIcon} width="64" height="64" />,
              style: {
                label: {
                  color: 'white',
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left: -15,
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  cardText: {
    fontSize: 20,
    color: 'white',
  },
});

export default CardDeck;
