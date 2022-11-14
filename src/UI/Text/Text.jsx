import classNames  from "classnames";
import styles from './Text.module.css';
import PropTypes from 'prop-types'

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
  } = prop;

  const classes = classNames(
    className,
    styles[`fs${size}`],
    styles[color],
    {[styles.center]: center},
    {[styles[`fst${tsize}`]]: tsize},
    {[styles[`fsd${dsize}`]]: dsize},
  );

  return <As className={classes} href={href}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  href: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};