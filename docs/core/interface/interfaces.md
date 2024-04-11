# Interfaces

### IGTAColor

```ts
export interface IGTAColor {
  id: number;
  hex: string;
  rgb: number[];
}
```

### IItemComponent

```ts
export interface IItemComponent {
  skin?: string;
  scope?: string;
  suppressor?: string;
  clip?: string;
  grip?: string;
  flashlight?: string;
}
```

### IInventoryItem

```ts
export interface IInventoryItem {
  name: string;
  slot: string;
  amount: number;
  expiration?: number;
  stability?: number;
  component?: IItemComponent;
}
```

### IInventory

```ts
export type IInventory = Record<TInventorySlot, IInventoryItem | null>;
```

### IAddInventoryItem

```ts
export interface IAddInventoryItem {
  itemName: string;
  slot?: string;
  amount: number;
  reason?: string;
}
```

### IHasItem

```ts
export interface IHasItem {
  status: eStatus;
  slots?: string[];
  amount?: number;
  message?: string;
}
```

### IInventoryResponse

```ts
export interface IInventoryResponse {
  status: eStatus;
  message?: string;
}
```

### IItem

```ts
export interface IItem {
  name: string;
  label: string;
  weight: number;
  limit: number;
  description: string;
  canUse: boolean;
  canTransfer: boolean;
  canDrop: boolean;
  expiration: number;
  stability: number;
  type: IItemType;
  rarity: EInventoryRarity;
}
```

### ILoginResponse

```ts
export interface ILoginResponse extends IResponse {
  data: IPlayer;
}
```

### IView

```ts
export interface IView {
  component: string;
  hasFocus: boolean;
  hasCursor: boolean;
  keepInput: boolean;
  show: boolean;
}
```

### INuiMessage

```ts
export interface INuiMessage {
  component?: string;
  type?: string;
  data?: any;
}
```

### INUIShowPageMessage

```ts
export interface INUIShowPageMessage {
  component: INUIPage;
  type: "show";
  data: boolean;
}
```

### INUINotificationMessage

```ts
export interface INUINotificationMessage {
  component: "Notification";
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration: number;
}
```

### INotification

```ts
export interface INotification {
  message?: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
}
```

### Vector3

```ts
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}
```

### IHairDecoration

```ts
export interface IHairDecoration {
  id: number;
  collection: string;
  overlay: string;
}
```

### IHairDecorations

```ts
export interface IHairDecorations {
  male: IHairDecoration[];
  female: IHairDecoration[];
}
```

### IPedHeadBlend

```ts
export interface IPedHeadBlend {
  shapeFirst: number;
  shapeSecond: number;
  shapeThird: number;
  skinFirst: number;
  skinSecond: number;
  skinThird: number;
  shapeMix: number;
  skinMix: number;
  thirdMix: number;
}
```

### IPedFaceFeatures

```ts
export interface IPedFaceFeatures {
  noseWidth: number;
  nosePeakHigh: number;
  nosePeakSize: number;
  noseBoneHigh: number;
  nosePeakLowering: number;
  noseBoneTwist: number;
  eyeBrownHigh: number;
  eyeBrownForward: number;
  cheeksBoneHigh: number;
  cheeksBoneWidth: number;
  cheeksWidth: number;
  eyesOpening: number;
  lipsThickness: number;
  jawBoneWidth: number;
  jawBoneBackSize: number;
  chinBoneLowering: number;
  chinBoneLenght: number;
  chinBoneSize: number;
  chinHole: number;
  neckThickness: number;
}
```

### IPedHeadOverlayValue

```ts
export interface IPedHeadOverlayValue {
  style: number;
  opacity: number;
  color?: number;
  secondColor?: number;
}
```

### IPedHeadOverlays

```ts
export interface IPedHeadOverlays {
  blemishes: IPedHeadOverlayValue;
  beard: IPedHeadOverlayValue;
  eyebrows: IPedHeadOverlayValue;
  ageing: IPedHeadOverlayValue;
  makeUp: IPedHeadOverlayValue;
  blush: IPedHeadOverlayValue;
  complexion: IPedHeadOverlayValue;
  sunDamage: IPedHeadOverlayValue;
  lipstick: IPedHeadOverlayValue;
  moleAndFreckles: IPedHeadOverlayValue;
  chestHair: IPedHeadOverlayValue;
  bodyBlemishes: IPedHeadOverlayValue;
  addBodyBlemishes: IPedHeadOverlayValue;
}
```

### IPedHair

```ts
export interface IPedHair {
  style: number;
  color: number;
  highlight: number;
}
```

### IPedComponent

```ts
export interface IPedComponent {
  componentId: number;
  drawable: number;
  texture: number;
}
```

### IPedProp

```ts
export interface IPedProp {
  propId: number;
  drawable: number;
  texture: number;
}
```

### IPedAppearance

```ts
export interface IPedAppearance {
  components: IPedComponent[];
  props: IPedProp[];
  headBlend: IPedHeadBlend;
  faceFeatures: IPedFaceFeatures;
  headOverlays: IPedHeadOverlays;
  hair: IPedHair;
  eyeColor: number;
  tattoos: ITattooList;
}
```

### ITattoo

```ts
export interface ITattoo {
  name: string;
  collection: string;
}
```

### ITattooList

```ts
export interface ITattooList {
  [key: string]: ITattoo[];
}
```

### ILoginPlayer

```ts
export interface ILoginPlayer {
  email: string;
  password: string;
  token?: string;
}
```

### IPlayer

```ts
export interface IPlayer {
  _id: string;
  id: number;
  name: string;
  email: string;
  gender: IGender;
  password?: string;
  salt?: string;
  health: number;
  armour: number;
  verifyCode?: string;
  verified: boolean;
  money: number;
  bank: number;
  coin: number;
  blackMoney?: number;
  coords: ICoords;
  appearance?: IPedAppearance;
  inventory: IInventory;
  inventoryId: string;
  inventoryWeight?: number;
  maxInventoryWeight?: number;
  hunger: number;
  thirst: number;
  wanted: number;
  faction?: string;
  isCuffing: boolean;
  isDead: boolean;
  avatar: string;
  exp: number;
  lastLogin: string;
  group: TPlayerGroup;
  fastSlot: PlayerFastSlot;
  newbieReward: boolean;
  job?: string;
  onlineTime: number;
}
```

### ICreatePlayer

```ts
export interface ICreatePlayer {
  email: string;
  password: string;
  name: string;
  gender: IGender;
}
```

### IPedHeadOvelayNum

```ts
export interface IPedHeadOvelayNum {
  blemishes: number;
  beard: number;
  eyebrows: number;
  ageing: number;
  makeUp: number;
  blush: number;
  complexion: number;
  sunDamage: number;
  lipstick: number;
  moleAndFreckles: number;
  chestHair: number;
  bodyBlemishes: number;
  addBodyBlemishes: number;
}
```

### IAddPlayerInventoryItemProps

```ts
export interface IAddPlayerInventoryItemProps {
  itemName: string;
  slot?: EPlayerInventorySlot;
  amount: number;
  reason?: string;
}
```

### IMenuElement

```ts
export interface IMenuElement {
  label: string;
  value: string;
}
```

### IMenuConversation

```ts
export interface IMenuConversation {
  name: string;
  message: string;
}
```

### IMenu

```ts
export interface IMenu {
  elements: IMenuElement[];
  conversation: IMenuConversation;
}
```

### ICreateMenuElement

```ts
export interface ICreateMenuElement {
  label: string;
  callback: () => void;
}
```

### ICreateMenu

```ts
export interface ICreateMenu {
  helloMessage?: string;
  title?: string;
  elements: ICreateMenuElement[];
  onCancle?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
}
```

### INuiDispatch

```ts
export interface INuiDispatch {
  event: IReduxAction;
  data: any;
}
```

### IPed

```ts
export interface IPed {
  pedModel: string;
  coords: number[];
  ped?: number;
  pedRelationShip?: string;
  voiceName?: string;
  interaction?: ICreateMenu;
}
```

### IRaycastEntity

```ts
export interface IRaycastEntity {
  entity: number;
  onTarget: () => void;
  outTarget: () => void;
}
```

### IWeaponShop

```ts
export interface IWeaponShop {
  name: string;
  type: string;
  price: number;
  damage: number;
  range: number;
  firerate: number;
  accuracy: number;
  control: number;
}
```

### IBuyData

```ts
export interface IBuyData {
  name: string;
  totalPrice: number;
  type: "ammo" | "weapon";
  paymentMethod: "cash" | "bank";
  storeIndex: number;
}
```

### IPlayerCanCarryItem

```ts
export interface IPlayerCanCarryItem {
  itemName: string;
  amount: number;
}
```
### IBlip
```ts
export interface IBlip {
  sprite: number;
  coords: number[];
  color?: eBlipColor;
  scale?: number;
  title: string;
  display?: number;
}
```

### IPreviewOptions
```ts
export interface IPreviewOptions {
  hair?: true;
  tattoos?: true;
  components?: true;
  props?: true;
}
```

### IPreviewAppearance
```ts
export interface IPreviewAppearance {
  components?: IPedComponent[];
  props?: IPedProp[];
  headBlend?: IPedHeadBlend;
  faceFeatures?: IPedFaceFeatures;
  headOverlays?: IPedHeadOverlays;
  hair?: IPedHair;
  eyeColor?: number;
  tattoos?: ITattoo[];
}
```
### IRemovePlayerInventoryItemProps
```ts
export interface IRemovePlayerInventoryItemProps {
  slot?: TInventorySlot;
  itemName?: string;
  amount?: number;
}
```
