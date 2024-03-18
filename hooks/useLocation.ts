import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | false>(false);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        console.log('Error getting location ', error);
        setLocation(false);
      }
    };

    getLocation();
  }, []);

  return location;
};