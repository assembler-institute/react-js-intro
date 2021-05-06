import React, { Component } from "react";

import getDisplayName from "../utils/getDisplayName";

function withData(WrappedComponent, request) {
  class WrapperComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isLoading: false,
        hasError: false,
        errorMessage: null,
      };

      this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
      this.loadData();
    }

    async loadData() {
      this.setState({
        isLoading: true,
      });

      try {
        const data = await request();

        this.setState({
          isLoading: false,
          data: data,
        });
      } catch (error) {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: error.message,
        });
      }
    }

    render() {
      const { data, isLoading, hasError, errorMessage } = this.state;

      return (
        <WrappedComponent
          data={data}
          isLoading={isLoading}
          hasError={hasError}
          errorMessage={errorMessage}
          {...this.props}
        />
      );
    }
  }

  WrapperComponent.displayName = getDisplayName(`withData(WrapperComponent)`);

  return WrapperComponent;
}

export default withData;
