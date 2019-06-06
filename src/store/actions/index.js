// action creator

export function withdrawMoney (money) {
    return {
        type: 'WITHDRAW_MONEY',
        payload: {
            money
        }
    }
}