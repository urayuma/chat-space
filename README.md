# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string||
|email|string||
|passwoed|string||
|message_id|integer||
|group_id|integer||

### Association
- has_many :messages
- has_many :groups, though: :user_groups

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer||
|group_id|integer||

### Association
- belongs_to :user
- belongs_to :group

## groupテーブル


|Column|Type|Options|
|------|----|-------|
|name|string||
|user_id|integer||
|message_id|integer||

### Association
- has_many :users, through: :user_groups
- has_many :messages

## user_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|users_id|integer||
|groups_id|integer||

### Association
- belongs_to :user
- belongs_to :group