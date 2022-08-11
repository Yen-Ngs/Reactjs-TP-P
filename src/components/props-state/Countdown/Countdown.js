import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Countdown.scss';
let isMount = false;
class Countdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentSecond: 0,
    };
  }

  componentDidMount() {
    isMount = true;
    const { seconds } = this.props;
    this.countdown(seconds);
  }

  componentWillUnmount() {
    isMount = false;
  }

  countdown(seconds) {
    if (seconds === -1) return;

    // Update current second state
    this.setState({ currentSecond: seconds });

    // Continue to count after 1s
    setTimeout(
      () => {
        if (isMount) this.countdown(seconds - 1)
      },
      1000
    );
  };

  render() {
    const { currentSecond } = this.state;
    return (
      <p className="countdown">
        {currentSecond}
      </p>
    );
  }
}

Countdown.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default Countdown;