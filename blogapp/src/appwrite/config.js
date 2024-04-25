import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //DATABASES

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("AppwriteService :: getPost() ::", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("AppwriteService :: getPosts() ::", error);
      return false;
    }
  }

  async createPost({ Title, Content, slug, FeaturedImage, Status, Userid }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { Title, Content, FeaturedImage, Status, Userid }
      );
    } catch (error) {
      console.log("AppwriteService :: createPost() ::", error);
      return false;
    }
  }

  async updatePost(slug, { Title, Content, FeaturedImage, Status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { Title, Content, FeaturedImage, Status, Userid }
      );
    } catch (error) {
      console.log("AppwriteService :: updatePost() ::", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("AppwriteService :: deletePost() ::", error);
      return false;
    }
  }

  //STORAGE

  async uploadFile(file) {
    try {
      return this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("AppwriteService :: uploadFile() ::", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("AppwriteService :: deleteFile() ::", error);
      return false;
    }
  }

  filePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href;
    } catch (error) {
      console.log("AppwriteService :: filePreview() ::", error);
    }
  }
}

const service = new Service();
export default service;
