import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get(`window`)
	.width;

const styles = StyleSheet.create({
	button: {
		marginHorizontal: 8
	},
	container: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		flexDirection: 'column',
		/*
		    backgroundColor: '#F5FCFF',
		    borderRadius: 4,
		    borderWidth: 0.5,
		    borderColor: '#d6d7da'
		    */
	},
	hsub: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	hspaced: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	hsubThin: {
		flex: 0.2,
		flexDirection: 'row',
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	vsub: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'space-around',
	},
	vsubThin: {
		flex: 0.2,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'space-around',
	},
	label: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	control: {
		flex: 3,
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	fullcontrol: {
		flex: 5,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
	},
	welcome: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 10
	},
	heading: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		margin: 10
	},
	h1: {
		fontWeight: 'bold',
		fontSize: 19,
		textAlign: 'center'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},


	domainInput: { backgroundColor: "#ededed", borderWidth: 4, borderColor: "#ffffff" },
	domainInputOK: { backgroundColor: "#ededed", borderWidth: 4, borderColor: "green" },
	domainInputWarning: { backgroundColor: "#ededed", borderWidth: 4, borderColor: "yellow" },
	domainInputError: { backgroundColor: "#ededed", borderWidth: 4, borderColor: "red" },

    contact_text: {
      fontSize: 16
    },

    contact_sectionhead: {
      fontSize: 18,
      fontWeight: 'bold'
    },

    header_container: {
        zIndex: 2,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    header_button: {
        alignContent: 'center',
        textAlignVertical: 'center'
    },
    header_text: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    }



});


import { COLOR } from 'react-native-material-ui';

const uiTheme = {
	palette: {
		primaryColor: COLOR.green500,
	},
	toolbar: {
		container: {
			height: 50,
		},
	},
};


export {
	styles,
	uiTheme
};
