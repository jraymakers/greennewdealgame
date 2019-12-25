export type ActivatePolicyGameAction = Readonly<{
  type: 'activatePolicy';
  policyName: string;
}>;

export type DeactivatePolicyGameAction = Readonly<{
  type: 'deactivatePolicy';
  policyName: string;
}>;

export type GameAction
 = ActivatePolicyGameAction
 | DeactivatePolicyGameAction
 ;
