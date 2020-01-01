import React, { useRef } from 'react';

import left from '../lib/arrow-left-bold.svg';
import right from '../lib/arrow-right-bold.svg';

import css from '../css/Carousel.module.css';

function Button(props) {
  const buttonEl = useRef(null);

  // check if device has a touch screen
  function checkMobile() {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return false;
    } else if (props.listRef.current === null) {
      return false;
    } else {
      return true;
    }
  }

  function checkScrollPosition() {}

  function scroll() {
    const sW = props.listRef.current.scrollWidth;
    const childrenCount = props.listRef.current.childElementCount;
    const move =
      (sW / (childrenCount / 2)) * (props.direction === 'L' ? -1 : 1);

    props.listRef.current.scrollBy({
      top: 0,
      left: move,
      behavior: 'smooth'
    });
  }

  function blur() {
    buttonEl.current.blur();
  }

  return (
    checkMobile() && (
      <button
        ref={buttonEl}
        className={css.button}
        onClick={scroll}
        onPointerUp={blur}
        style={
          props.direction === 'L' ? { left: '-1.6rem' } : { right: '-1.6rem' }
        }
      >
        <img
          src={props.direction === 'L' ? left : right}
          alt={`${
            props.direction === 'L' ? 'left' : 'right'
          } carousel scroll button`}
        />
      </button>
    )
  );
}

export default function Carousel(props) {
  const listEl = useRef(null);

  return (
    <div className={css.container}>
      <Button direction="L" listRef={listEl} />
      <ul ref={listEl} className={css.list}>
        {props.children}
      </ul>
      <Button direction="R" listRef={listEl} />
    </div>
  );
}
