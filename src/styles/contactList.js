import { StyleSheet } from "react-native";

const sizes = {
    itemHeight: 40,
    headerHeight: 30,
    listHeaderHeight: 0,
  
    spacing: {
      small: 10,
      regular: 15,
      large: 20,
    },
};

const colors = {
    background: {
      light: "white",
      dark: "#8e8e93",
    },
  
    seperatorLine: "#e6ebf2",
  
    text: {
      dark: "#1c1b1e",
    },
  
    primary: "#007aff",
};

const styles = StyleSheet.create({
    container: {
      position: "relative",
    },
    
    listHeaderLabel: {
      flex: 1,
      justifyContent: "center",
    },

    listItemContainer: {
      flex: 1,
      height: sizes.itemHeight,
      paddingHorizontal: sizes.spacing.regular,
      justifyContent: "center",
      borderTopColor: colors.seperatorLine,
      borderTopWidth: 1,
    },
  
    listItemLabel: {
      color: colors.text.dark,
      fontSize: 14,
    },
  
    sectionHeaderContainer: {
      height: sizes.headerHeight,
      backgroundColor: colors.background.dark,
      justifyContent: "center",
      paddingHorizontal: sizes.spacing.regular,
    },
  
    sectionHeaderLabel: {
      color: colors.background.light,
    },
})

export default styles;