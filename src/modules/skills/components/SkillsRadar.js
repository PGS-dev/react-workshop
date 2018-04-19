import React from 'react';
import PropTypes from 'prop-types';
import { VictoryArea, VictoryChart, VictoryLabel, VictoryPolarAxis, VictoryTheme } from 'victory';

class App extends React.PureComponent {
  state = {
    data: this.processData(this.props.data),
  };

  processData = data => Object.keys(data).map(key => ({ x: key, y: parseFloat(data[key]) }));

  render() {
    return (
      <VictoryChart
        polar
        theme={VictoryTheme.material}
        domain={{ y: [0, 300] }}
        animate={{ duration: 250 }}
      >
        {Object.keys(this.state.data).map((key, i) => (
          <VictoryPolarAxis
            dependentAxis
            style={{
              axisLabel: { padding: 20, fill: 'white', opacity: 0.5, stroke: 'transparent' },
              axis: { stroke: 'none' },
              grid: { stroke: 'white', strokeWidth: 0.25, opacity: 0.5 },
            }}
            tickLabelComponent={
              <VictoryLabel
                labelPlacement="vertical"
                style={{ fontSize: 10, fill: 'white', opacity: 0.5 }}
              />
            }
            labelPlacement="perpendicular"
            label={key}
            key={key}
            axisValue={i + 1}
            tickFormat={t => t}
            tickValues={[50, 100, 150, 200, 250, 300]}
          />
        ))}
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ''}
          style={{
            axis: { stroke: 'none' },
            grid: { stroke: 'white', opacity: 0.4 },
          }}
        />
        <VictoryArea
          interpolation="catmullRom"
          style={{ data: { fill: '#c43a31', fillOpacity: 0.5, strokeWidth: 1 } }}
          data={this.processData(this.props.data)}
        />
      </VictoryChart>
    );
  }
}

export default App;
