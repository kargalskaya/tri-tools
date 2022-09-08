import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  
  const handleStartClick = () => {
    setRunning(true);
  };
  const handleStopClick = () => {
    setRunning(false);
  };
  const handleResetClick = () => {
    setRunning(false);
    setTime(0);
  };
  // const handleLapClick = () => {
  //   if (timerState) {
  //     addLap([...laps, startTime.diffNow('milliseconds')]);
  //   }
  // };
  // const formatDate = (date: number): string => {
  //   const dt = DateTime.fromMillis(date, {zone: 'utc'});
  //   return dt.toFormat('HH:mm:ss.uu');
  // }
  // useEffect(() => {
  //   if (timerState) {
  //     setStartTime(DateTime.now());
  //   }
  // }, [count]);
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.time}>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</Text>
        <Text style={styles.time}>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</Text>
        <Text style={styles.time}>{("0" + (time)).slice(-3)}</Text>
      </View>
      {!running
        ? <>
            <Button title='Start' onPress={handleStartClick} />
          </>
        : <>
            {<Button title='Stop' onPress={handleStopClick} />}
            {/* <Button title='Lap' onPress={handleLapClick} /> */}
          </>
      }
      {<Button title='Reset' onPress={handleResetClick} />}
      {/* <Text style={styles.text}>{formatDate(count)}</Text>
      <Text style={styles.text}>{JSON.stringify(laps)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 'auto',
  },
  timer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  time: {
    color: '#fff',
    fontSize: 30,
    width: 60,
    borderColor: '#fff',
    borderWidth: 1,
  }
});
