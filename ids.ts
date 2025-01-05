export enum BotIds {
  // ...
	PROG = 44,
  // ...
}



export const usernames: Record<BotIds, string> = Object.freeze({
	[BotIds.PROG]: 'tvoy_yap_bot'
});

export const allBotIds: readonly BotIds[] = Object.keys(BotIds)
	.map((value) => parseInt(value))
	.filter((key) => !isNaN(key)) as [] as BotIds[];
