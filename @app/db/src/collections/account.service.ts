import { Injectable, Inject } from '@nestjs/common';
import { CollectionName, collectionFactory } from './collection.factory';
import { Collection, ObjectId, FilterQuery, MatchKeysAndValues } from 'mongodb';
import { BaseRecord, Stringifiable, Creatable, ensureCreatedOn } from '../utils/record';
import { ApiProperty } from '@nestjs/swagger';

import * as path from 'path';
import debug from 'debug';
import { pkg } from '../utils/environment';
const log = debug(`${pkg.name}:${path.basename(__filename)}`)

type Record = AccountService.Record;

const COLLECTION = CollectionName.Accounts;

export const collectionProvider = collectionFactory<Record>(COLLECTION, ensureIndexes);
async function ensureIndexes(collection: Collection<Record>) {
    await collection.createIndex({ email: 1 }, { unique: true, sparse: true });
}

@Injectable()
export class AccountService {
    constructor(
        @Inject(collectionProvider.provide) private readonly collection: Collection<Record>
    ) { }

    get(_id: ObjectId) {
        return this.collection.findOne({ _id });
    };

    getByEmail(email: string) {
        return this.collection.findOne({ email });
    };

    list() {
        return this.collection.find().toArray();
    };

    findOne(query: FilterQuery<Record>) {
        return this.collection.findOne(query);
    };

    insertOne(params: Creatable<Record>) {
        return this.collection.insertOne(ensureCreatedOn(params));
    }

    updateInfo(_id: ObjectId, params: Partial<Pick<Record, 'nickname'>>) {
        const { nickname } = params;
        const set: MatchKeysAndValues<Record> = {
            nickname
        };
        return this.collection.updateOne({ _id }, { $set: set });
    };

    updateEmailVerfied(_id: ObjectId, state: boolean) {
        return this.collection.updateOne({ _id }, { $set: { verifiedEmail: state } });
    };

    updatePassword(record: Record, params: Pick<Record, 'passwordHash' | 'passwordSalt'>) {
        const { passwordHash, passwordSalt } = params;
        return this.collection.updateOne({ _id: record._id }, { $set: { passwordHash, passwordSalt } });
    };

    updateProfilePicture(_id: ObjectId, params: Pick<Record, 'profilePicureFile'>) {
        const { profilePicureFile } = params;
        return this.collection.updateOne({ _id }, { $set: { profilePicureFile } });
    };
}
export namespace AccountService {
    export interface Record<T = ObjectId> extends BaseRecord<T> {
        email: string;
        verifiedEmail?: boolean;
        nickname?: string;
        passwordHash: string;
        passwordSalt: string;
        profilePicureFile?: string;
        remoteProfilePictureUrl?: string;
        birthday: string;
        gender: string;
        phoneNumber: string; 
    }

    export class AccountDbo implements Omit<Record<string>, 'passwordHash' | 'passwordSalt'> {
        @ApiProperty()
        _id: string;

        @ApiProperty()
        email: string;

        @ApiProperty()
        verifiedEmail?: boolean

        @ApiProperty()
        nickname?: string;

        @ApiProperty()
        profilePicureFile?: string;

        @ApiProperty()
        remoteProfilePictureUrl?: string;

        @ApiProperty()
        phoneNumber!: string;

        @ApiProperty()
        birthday!: string;

        @ApiProperty()
        gender!: string;

        @ApiProperty()
        createdOn: Date;

        constructor(record: Record<ObjectId>) {
            this._id = record._id.toHexString();
            this.email = record.email;
            this.verifiedEmail = record.verifiedEmail;
            this.nickname = record.nickname;
            this.profilePicureFile = record.profilePicureFile;
            this.remoteProfilePictureUrl = record.remoteProfilePictureUrl;
            this.birthday = record.birthday;
            this.gender = record.gender;
            this.birthday = record.birthday;
            this.createdOn = record.createdOn;
        }
    }

    export class UserDbo implements Omit<Record<string>, 'passwordHash' | 'passwordSalt' | 'email' | 'verifiedEmail' | 'birthday' | 'gender' | 'phoneNumber'> {
        @ApiProperty()
        _id: string;

        @ApiProperty()
        nickname?: string;

        @ApiProperty()
        profilePicureFile?: string;

        @ApiProperty()
        remoteProfilePictureUrl?: string;

        @ApiProperty()
        createdOn: Date;

        constructor(record: Record<ObjectId>) {
            this._id = record._id.toHexString();
            this.nickname = record.nickname;
            this.profilePicureFile = record.profilePicureFile;
            this.remoteProfilePictureUrl = record.remoteProfilePictureUrl;
            this.createdOn = record.createdOn;
        }
    }
}