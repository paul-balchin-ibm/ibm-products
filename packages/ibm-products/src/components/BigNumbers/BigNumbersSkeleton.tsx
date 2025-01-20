// @ts-check
/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import classnames from 'classnames';
// Carbon and package components we use.
import { SkeletonText } from '@carbon/react';
import { BigNumbersProps } from './BigNumbers';
import { BigNumbersSize } from './constants';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--big-numbers-skeleton`;
const componentName = 'BigNumbersSkeleton';

/**
 * SkeletonBigNumbers is used to display a skeleton version while
 * content is loading (handled by the BigNumbers prop `loading').
 *
 * Note: This component is only used within BigNumbers.
 */

// Use the same properties and values as parent BigNumbersProps
type BigNumbersSkeletonProps = Pick<BigNumbersProps, 'className' | 'size'>;

export const BigNumbersSkeleton = React.forwardRef(
  (
    { className, size, ...rest }: BigNumbersSkeletonProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const BigNumbersSkeletonClasses = classnames(className, {
      [`${blockClass}--lg`]: size === BigNumbersSize.Large,
      [`${blockClass}--xl`]: size === BigNumbersSize.XLarge,
    });
    return (
      <div
        {...rest}
        className={cx(className, blockClass, BigNumbersSkeletonClasses)}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        <SkeletonText className={`${blockClass}__label`} />
        <SkeletonText heading className={`${blockClass}__value`} width="80%" />
      </div>
    );
  }
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
BigNumbersSkeleton.displayName = componentName;

BigNumbersSkeleton.propTypes = {
  /**
   * Optional class name.
   * @type number
   */
  className: PropTypes.string,
  /** The size of the BigNumbers.
   * @type string
   */
  // size: PropTypes.oneOf(Object.values(BigNumbersSize)),
  size: PropTypes.oneOf(['default', 'lg', 'xl']),
};
