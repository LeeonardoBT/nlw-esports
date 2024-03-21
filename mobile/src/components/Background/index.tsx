import { ImageBackground, View } from 'react-native';

import backgroundImg from '../../assets/fundo.png'

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({ children } : Props) {
  return (
    <ImageBackground 
        source={backgroundImg}
        defaultSource={backgroundImg}
        style={styles.container}
    >
        { children }
    </ImageBackground>
  );
}