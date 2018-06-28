import React from 'react';
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import { ResponsiveRadar } from '@nivo/radar';

const theme = {
  axis: {
    textColor: '#eee',
    fontSize: '16px',
    tickColor: '#eee',
  },
  grid: {
    stroke: '#888',
    strokeWidth: 1,
  },
  dots: {
    fontSize: '16px',
    textColor: '#eee',
  },
};

const propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

function SkillsRadar({ data }) {
  const radarData = Object.keys(data).map(key => ({ label: key, result: data[key] }));
  return (
    <ResponsiveRadar
      data={radarData}
      keys={['result']}
      indexBy="label"
      margin={{
        top: 100,
        right: 100,
        bottom: 100,
        left: 100,
      }}
      curve="catmullRomClosed"
      borderWidth={2}
      borderColor="inherit"
      gridLevels={10}
      gridShape="circular"
      gridLabelOffset={36}
      enableDots
      dotSize={8}
      dotColor="inherit"
      dotBorderWidth={0}
      dotBorderColor="#ffffff"
      enableDotLabel
      dotLabel="value"
      dotLabelYOffset={-20}
      colors={[pink[500]]}
      colorBy="key"
      fillOpacity={0.6}
      animate
      motionStiffness={90}
      motionDamping={15}
      tickValues={[25, 50, 100]}
      isInteractive
      theme={theme}
    />
  );
}

SkillsRadar.propTypes = propTypes;
export default SkillsRadar;
