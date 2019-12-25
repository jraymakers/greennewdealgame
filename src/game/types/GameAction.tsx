export type ActivatePolicyGameAction = Readonly<{
  type: 'activatePolicy';
  action: string;
}>;

export type DeactivatePolicyGameAction = Readonly<{
  type: 'deactivatePolicy';
  action: string;
}>;

export type GameAction
 = ActivatePolicyGameAction
 | DeactivatePolicyGameAction
 ;
