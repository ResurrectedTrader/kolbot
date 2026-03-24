// @ts-nocheck
export interface GameActionType {
  LogNames: boolean;
  LogItemLevel: boolean;
  LogEquipped: boolean;
  LogMerc: boolean;
  SaveScreenShot: boolean;
  IngameTime: number;
  task: { hash: string; profile: string; action: string; data: unknown } | null;

  // Methods
  init(task: string): void;
  update(action: string, data: string | object): void;
  gameInfo(): { gameName: string; gamePass: string };
  getLogin(): { realm: string; account: string; password: string };
  getCharacters(): string[];
  inGameCheck(): boolean;
  load(hash: string): string;
  save(hash: string, data: string): void;
  dropItems(dropList: string[]): void;
  convertLadderFiles(): void;
}

declare global {
  type DoDropGameActionData = {
    items: Array<{ title: string; character: string; realm: string; account: string; itemid: string }>;
    gameName: string;
    gamePass: string;
    realm: string;
    account: string;
    chars: string[];
  };

  const GameAction: GameActionType;
}
