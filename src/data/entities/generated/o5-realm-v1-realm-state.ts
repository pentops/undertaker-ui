/**
 * @generated by @pentops/jsonapi-jdef-ts-generator (Plugin: NormalizedQueryPlugin) - do not edit */

import { schema } from 'normalizr';
import { O5RealmV1RealmState } from '../../types/generated';

export const O5_REALM_V1_REALM_STATE_ENTITY_NAME = 'o5.realm.v1/realm';
export const o5RealmV1RealmStateEntity = new schema.Entity<O5RealmV1RealmState>(O5_REALM_V1_REALM_STATE_ENTITY_NAME, {}, { idAttribute: 'realmId' });