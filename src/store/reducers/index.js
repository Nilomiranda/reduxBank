export default (state, action) => {
    switch(action.type) {
        case 'WITHDRAW_MONEY':
            console.log('huum, trying to get some money?')
            return {
                ...state,
                totalAmount: state.totalAmount - action.payload.money
            }
        default:
            return state;
    }
}