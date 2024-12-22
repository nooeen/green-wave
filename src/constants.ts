export const STATES = {
  PENDING: "pending",
  CREATING: "creating",
  CONFIRMING: "confirming",
  CREATED: "created",
  PROCESSING: "processing",
  PROCESSED: "processed",
  FAILED: "failed",
};


export const MAIL_API = {
  BASE_URL: "https://mail10year.com",
  PATHS: {
    GENERATE_MAIL: "/login/apireg.php",
    MAIL_CHECK: "/login/api.php?login=",
    LATEST_MAIL: "/login/new.php?login=",
  }
}