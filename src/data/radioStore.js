import { create } from 'zustand'

const useRadioStore = create(set => ({
	channel: 'P3',

	setChannel: name => set({
		channel: name
	}),
}))

export { useRadioStore }
