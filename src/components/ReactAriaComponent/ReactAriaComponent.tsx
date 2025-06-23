import React, { useState } from 'react';
import { useListData } from 'react-stately';
import ErrorDisplay from '../errorDisplay';
import ListDisplay from './listDisplay';
import ListEditor from './listEditor';
import ListHistory from './listHistory';
import { addAnimalFunction, Key } from '../../types';
import { motion } from 'motion/react';
import Transition from '../transition';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
//
const errorWrapperFragment: string =
  'errorWrapperFragment' + ' ' + 'bg-gray-600' + ' ' + 'flex justify-center';
//

//
const appWrapperFragment: string =
  'appWrapperFragment' +
  ' ' +
  'bg-gray-600 max-w-' +
  ' ' +
  'flex flex-wrap justify-center flex-col items-center';
//

//
const listsWrapperFragment: string =
  'listsWrapperFragment' +
  ' ' +
  'w-full' +
  ' ' +
  'mb-4' +
  ' ' +
  'flex justify-center flex-col sm:flex-row' +
  ' ' +
  'flex-wrap sm:flex-nowrap';
//

//
const wrapper2ndFragment: string =
  'wrapper2ndFragment' +
  ' ' +
  'rounded-lg' +
  ' ' +
  'w-full' +
  ' ' +
  'p-2' +
  ' ' +
  'md:max-w-initial lg:max-w-248' +
  ' ' +
  'flex flex-wrap justify-center flex-col items-center';
//

// const wrapperFragment:string = ;
const containerFragment: string =
  'absolute overflow-hidden flex flex-col justify-center items-center transition-background duration-10';
//

//
const wrapperFragment: string =
  'rounded-lg  flex flex-nowrap flex-col w-full max-w-auto lg:max-w-248 p-3 sm:p-10  mt-10 sm:mt-0';
//

//
// const boxWrapperFragment: string =
//   'rounded-lg  mt-10 flex flex-nowrap flex-col w-auto max-w-auto px-10 md:px-0 mr-10';
//

//
const wrapperInnerFragment: string =
  'wrapperInnerFragment' + ' ' + 'z-10 rounded-lg p-4  w-full max-w-auto ';
//

//
const wrapperEffectFragment: string = ' z-0 rounded-lg my-2 w-full max-w-auto';
//

//

const brandPageColorDark = '#016630';
const brandPageColorBase = '#00c950';
const brandPageColorLight = '#dcfce7';
const circle01 = 'circle01';
const circle02 = 'circle02';
const square01 = 'square01';
const square02 = 'square02';

// const wrapperFragment:string = ;

const ReactAriaComponent = () => {
  //basic error state
  const [hasError, setHasError] = useState(false);

  //initial state of animal collection
  const animals = [
    { name: 'Aardvark', id: 0, isDeleted: false },
    { name: 'Kangaroo', id: 1, isDeleted: false },
    { name: 'Snake', id: 2, isDeleted: false },
  ];

  //initial state of animal collection being set in useListData
  const list = useListData({
    initialItems: animals,
    initialSelectedKeys: ['Kangaroo'],
    getKey: (item) => item.id,
  });

  //check if any error occurs with useListData
  if (!list) {
    setHasError(true);
  } else {
    //updates isDeleted value of entry, simulating deletion from the state on the front end while still allowing other components to make use of the full and accurate data e.g. history component. applicable for moderated shared spaces including wikis and forms.
    function updateAnimal(
      id: Key,
      newValue: {
        name: string;
        id: number;
        isDeleted: boolean;
      }
    ) {
      list.update(id, {
        name: newValue.name,
        id: newValue.id,
        isDeleted: true,
      });
    }

    //adds user input animal to the state, main display, and history
    function addAnimal(id: addAnimalFunction) {
      list.append(id);
    }

    if (hasError) {
      // error has occurred, render this instead of expected components
      return (
        <>
          <div className={errorWrapperFragment}>
            error
            <ErrorDisplay />
          </div>
        </>
      );
    } else {
      // list is fine, render expected components
      return (
        <>
          <div className={wrapper2ndFragment}>
            <div className={listsWrapperFragment}>
              <ListDisplay ListData={list} onPressFunc={updateAnimal} />
              <ListHistory ListData={list} />
            </div>
            <ListEditor ListData={list} addAnimal={addAnimal} />
          </div>
        </>
      );
    }
  }
};

const ProjectContainerComponent: React.FC = () => {
  const contentSlideIn = {
    visible: { y: 0 },
    hidden: { y: -1000 },
  };
  const contentRotationWrapper = {
    initial: {
      rotate: '0deg',
      scale: 1,
    },
    rotatePositive: {
      rotate: '2.5deg',
    },
    rotateNegative: {
      rotate: '-2.5deg',
    },
    rotateLogo: {
      rotate: '2.5deg',
      color: brandPageColorDark,
    },
    scaleHover: {
      scale: 1.25,
    },
    scaleHoverBG: {
      scale: 1.5,
    },
  };

  const ContentItemWrapper = ({
    children,
    prop1,
    rotationBGDirection,
    rotationDirection,
  }) => {
    let fontColor = '#000';
    if (rotationDirection == 'rotateLogo') {
      fontColor = brandPageColorBase;
      console.log(rotationBGDirection);
    }
    return (
      <motion.div
        className={wrapperFragment}
        initial='hidden'
        animate='visible'
        whileInView='visible'
        variants={contentSlideIn}
        viewport={{ once: true }}
        transition={{ duration: prop1 }}
      >
        <motion.div
          className={wrapperEffectFragment}
          initial='initial'
          variants={contentRotationWrapper}
          style={{ backgroundColor: brandPageColorDark }}
        >
          <motion.div
            className={wrapperInnerFragment}
            initial='initial'
            variants={contentRotationWrapper}
            style={{
              backgroundColor: brandPageColorLight,
              color: fontColor,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };
  const fadeAnimation = { opacity: [0, 1, 0], scale: 1 };
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
    },
  };

  const animatedShape = {
    hidden: { opacity: 0, x: 0, scale: 0 },
    show: { x: 0, scale: 1 },
  };

  const BackgroundAnimatedShapesTransitionFunc = (sY: number) => {
    return {
      duration: 4,
      delay: sY,
      ease: [0, 0.71, 0.2, 1.01],
      repeat: Infinity,
    };
  };

  const BackgroundAnimatedShapes = () => {
    return (
      <motion.div
        style={{ background: brandPageColorDark }}
        variants={container}
        initial='hidden'
        animate='show'
      >
        <motion.div
          className={circle01}
          style={{ background: brandPageColorDark }}
          animate={fadeAnimation}
          variants={animatedShape}
          transition={BackgroundAnimatedShapesTransitionFunc(0)}
        ></motion.div>
        <motion.div
          className={circle02}
          style={{ background: brandPageColorDark }}
          animate={fadeAnimation}
          variants={animatedShape}
          transition={BackgroundAnimatedShapesTransitionFunc(1)}
        ></motion.div>

        <motion.div
          className={square01}
          style={{ background: brandPageColorDark }}
          animate={fadeAnimation}
          variants={animatedShape}
          transition={BackgroundAnimatedShapesTransitionFunc(2)}
        ></motion.div>
        <motion.div
          className={square02}
          style={{ background: brandPageColorDark }}
          animate={fadeAnimation}
          variants={animatedShape}
          transition={BackgroundAnimatedShapesTransitionFunc(3)}
        ></motion.div>
      </motion.div>
    );
  };
  return (
    <>
      <motion.div
        className={containerFragment}
        style={{
          minHeight: '100vh',
          width: '100vw',
          backgroundColor: brandPageColorBase,
        }}
      >
        <BackgroundAnimatedShapes />
        <ContentItemWrapper
          prop1={1.2}
          rotationBGDirection={'rotateNegative'}
          rotationDirection={'rotateLogo'}
        >
          <ReactAriaComponent />
        </ContentItemWrapper>
      </motion.div>
    </>
  );
};

export default Transition(ProjectContainerComponent);
