import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: verticalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: verticalScale(50),
    height: verticalScale(50),
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: verticalScale(24),
    color: '#636776',
  },
  username: {
    marginTop: verticalScale(5),
  },
  searchBox: {
    marginTop: verticalScale(20),
    marginHorizontal: verticalScale(24),
  },
  highlightedImageContainer: {
    marginHorizontal: verticalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
});
export default style;
